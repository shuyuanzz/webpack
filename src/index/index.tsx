import * as React from "react";
import AsideBar from "../component/aside-bar";
import "../styleSheet/index.css";
import listData from "../../conf/nav-list-data";
import LoginModal from "../component/login-modal";
import RegistModal from "../component/regist-modal";
import Http from "../../tools/http";
interface Istate {
  pageStatus: string;
  listData: [];
}
export default class Index extends React.Component<any, Istate> {
  public axios: Http;
  constructor(props: any) {
    super(props);
    this.state = {
      pageStatus: "index",
      listData: []
    };
    this.axios = new Http(
      "https://www.easy-mock.com/mock/5d4257ee7482bb7b59232d8f/shuyuanzz"
    );
  }
  changePageStatus = (pageName: string): void => {
    this.setState({
      pageStatus: pageName
    });
  };
  componentDidMount() {
    this.axios
      .get("/demolist")
      .then(res => {
        console.log('res',res)
        this.setState({
          listData: res.data.listData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { pageStatus, listData } = this.state;
    if (!listData.length) return null;
    switch (pageStatus) {
      case "index":
        return (
          <AsideBar
            title="DEMO"
            subTitleList={listData}
            changePage={this.changePageStatus}
          />
        );
      case "login":
        return <LoginModal />;
      case "regist":
        return <RegistModal />;
    }
  }
}
