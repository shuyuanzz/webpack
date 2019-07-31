import * as React from "react";
import AsideBar from "../component/aside-bar";
import "../styleSheet/index.css";
import listData from "../../conf/nav-list-data";
import LoginMoadl from "../component/login-modal";
interface Istate {
  needLogin: boolean;
}
export default class Index extends React.Component<any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      needLogin: true
    };
  }
  changeStatus = () => {
    this.setState(prevstate => {
      return {
        needLogin: !prevstate.needLogin
      };
    });
  };
  render() {
    const { needLogin } = this.state;
    return needLogin ? (
      <LoginMoadl loginEvent={this.changeStatus}/>
    ) : (
      <AsideBar title="demo" subTitleList={listData} />
    );
  }
}
