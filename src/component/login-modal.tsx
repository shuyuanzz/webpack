import * as React from "react";
import "../styleSheet/login.css";
interface Iprops {
}
export default class LoginModal extends React.Component<Iprops, any> {
  render() {
    return (
      <div className="login-container">
        <div className="login-cart">
          <div className="login-title">login</div>
          <div className="login-label">
            用户名
            <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入账号" />
          </div>
          <div className="login-label">
            密码
            <input
              type="password"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入密码"
            />
          </div>
          <div className="button-container">
            <button>登陆</button>
          </div>
        </div>
      </div>
    );
  }
}
