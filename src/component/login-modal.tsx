import * as React from "react";
import "../styleSheet/login.css";
interface Iprops {
  loginEvent: any;
}
export default class LoginMoadl extends React.Component<Iprops, any> {
  render() {
    const { loginEvent } = this.props;
    return (
      <div className="login-container">
        <div className="login-cart">
          <div className="login-title">login</div>
          <label>
            用户名
            <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入账号" />
          </label>
          <label>
            密码{" "}
            <input
              type="password"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入密码"
            />
          </label>
          <div className="button-container">
            <button onClick={loginEvent}>登陆</button>
            <button>注册</button>
          </div>
        </div>
      </div>
    );
  }
}
