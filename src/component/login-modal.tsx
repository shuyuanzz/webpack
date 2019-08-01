import * as React from "react";
import "../styleSheet/login.css";
import Http from "../../tools/http";
import CookieManagement from "../../tools/cookieManagement";
interface Iprops {
  axios: Http;
  changePageStatus: Function;
}
export default class LoginModal extends React.Component<Iprops, any> {
  private account: any;
  private password: any;
  private cookieManagement: CookieManagement;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      message: null,
      loading: false
    };
    this.cookieManagement = new CookieManagement();
  }
  handleOnLogin = () => {
    if (!/^[a-zA-Z0-9_-]{4,16}$/.test(this.account.value)) {
      this.setState({
        message:
          "Please enter 4 to 16 digits (letter, number, underscore, minus)"
      });
      return;
    }
    if (this.password.value === "") {
      this.setState({
        message: "password can not be blank"
      });
      return;
    }
    this.setState({ loading: true });
    this.props.axios
      .post("/login", {
        username: this.account.value,
        password: this.password.value
      })
      .then(res => {
        if (res.data.data.message === "success") {
          this.cookieManagement.setItem("login", true, null, null, null, null);
          this.props.changePageStatus("index");
        } else {
          this.setState({
            message: res.data.data.message,
            loading: false
          });
          this.password.value = "";
          this.password.focus();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { message, loading } = this.state;
    const { changePageStatus } = this.props;

    return loading ? (
      <div className="login-container">
        <div className="bouncing-loader">
          <div />
          <div />
          <div />
        </div>
      </div>
    ) : (
      <div className="login-container">
        <div className="login-cart">
          <div className="login-title">login</div>
          <div className="login-label">
            用户名
            <input
              type="text"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入账号"
              ref={input => (this.account = input)}
            />
          </div>
          <div className="login-label">
            密码
            <input
              type="password"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入密码"
              ref={input => (this.password = input)}
            />
          </div>
          {message && <span className="login-message"> {`${message} !`}</span>}
          <div className="button-container">
            <button onClick={this.handleOnLogin}>登陆</button>
            <button onClick={() => changePageStatus("regist")}>注册</button>
          </div>
        </div>
      </div>
    );
  }
}
