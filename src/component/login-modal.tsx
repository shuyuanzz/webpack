import * as React from "react";
import "../styleSheet/login.css";
export default class LoginMoadl extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-cart">
          <div className="login-title">login</div>
          <label>
            用户名
            <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入账号" />
          </label>
          <label>
            密码 <input type="password" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;输入密码" />
          </label>
          <div className="button-container">
            <button>登陆</button>
            <button>注册</button>
          </div>
        </div>
      </div>
    );
  }
}
