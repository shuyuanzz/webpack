import * as React from "react";
import AsideBar from "../component/aside-bar";
import '../styleSheet/index.css';

export default class Index extends React.Component {
  render() {
    return <AsideBar title="demo" subTitleList={[]}/>;
  }
}
