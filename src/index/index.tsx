import * as React from "react";
import AsideBar from "../component/aside-bar";
import "../styleSheet/index.css";
import listData from "../../conf/nav-list-data";
import LoginModal from "../component/login-modal";
import RegistModal from "../component/regist-modal";
interface Istate {
  pageStatus: string;
}
export default class Index extends React.Component<any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageStatus: "index"
    };
  }
  changePageStatus = (pageName:string):void => {
    this.setState({
      pageStatus:pageName
    });
  }
  render() {
    const { pageStatus } = this.state;
    switch (pageStatus) {
      case "index":
        return <AsideBar title="DEMO" subTitleList={listData} changePage={this.changePageStatus}/>;
      case "login":
        return <LoginModal />;
      case "regist":
        return <RegistModal />;
    }
  }
}
