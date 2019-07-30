import * as React from "react";
interface Iprops {
  title: string;
  subTitleList: Array<{ name: string; hash: string }>;
}
export default class AsideBar extends React.Component<Iprops, any> {
  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <nav className="nav-container">
          <div className="nav-title">{title}</div>
          <div className="input-wapper">
          <input type="text" placeholder="type in search" className="nav-input"/>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
