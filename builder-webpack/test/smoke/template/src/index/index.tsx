import * as React from "react";
import AsideBar from "../component/aside-bar";
import "../styleSheet/index.css";
import listData from "../../conf/nav-list-data";
import LoginModal from "../component/login-modal";
import RegistModal from "../component/regist-modal";
import Http from "../../tools/http";
import hasLogin from "../../tools/hasLogin";
interface Istate {
  pageStatus: string;
  listData: any[];
}
export default class Index extends React.Component<any, Istate> {
  public axios: Http;
  constructor(props: any) {
    super(props);
    this.state = {
      pageStatus: hasLogin() ? "index" : "login",
      listData: listData
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
    // if (hasLogin()) {
    //   this.axios
    //     .get("/demolist")
    //     .then(res => {
    //       this.setState({
    //         listData: res.data.listData
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
  componentDidUpdate() {
    if (hasLogin() && this.state.listData.length === 0) {
      this.axios
        .get("/demolist")
        .then(res => {
          this.setState({
            listData: res.data.listData
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    const { pageStatus, listData } = this.state;

    switch (pageStatus) {
      case "index":
        return !listData.length ? null : (
          <AsideBar
            title="DEMO"
            subTitleList={listData}
            changePage={this.changePageStatus}
          />
        );

      case "login":
        return (
          <LoginModal
            axios={this.axios}
            changePageStatus={this.changePageStatus}
          />
        );
      case "regist":
        return (
          <RegistModal
            axios={this.axios}
            changePageStatus={this.changePageStatus}
          />
        );
    }
  }
}
