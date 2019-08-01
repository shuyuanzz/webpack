import * as React from "react";
import "../styleSheet/login.css";
interface Iprops {
}
export default class RegistModal extends React.Component<Iprops, any> {
  render() {
    return (
      <div className="login-container">
        <div className="login-cart">
          <div className="login-title">regist</div>
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
          <div className="login-label">
            确认密码
            <input
              type="password"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入密码"
            />
          </div>
          <div className="button-container">
            <button>注册</button>
          </div>
        </div>
      </div>
    );
  }
}
