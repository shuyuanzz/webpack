import * as React from "react";
import "../styleSheet/login.css";
import Http from "../../tools/http";
interface Iprops {
  axios: Http;
  changePageStatus: Function;
}
export default class RegistModal extends React.Component<Iprops, any> {
  private account: any;
  private password: any;
  handeleOnRegist = () => {
    alert("暂不支持");
  };
  render() {
    const { changePageStatus } = this.props;
    return (
      <div className="login-container">
        <div className="login-cart">
          <div className="login-title">regist</div>
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
              type="text"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入密码"
              ref={input => (this.password = input)}
            />
          </div>
          <div className="button-container">
            <button onClick={() => changePageStatus("login")}>登陆</button>
            <button onClick={this.handeleOnRegist}>注册</button>
          </div>
        </div>
      </div>
    );
  }
}
