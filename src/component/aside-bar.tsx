import * as React from "react";
import { IoIosSearch } from "react-icons/io";
interface Iprops {
  title: string;
  subTitleList: Array<{ name: string; hash: string }>;
}
interface Istate {
  subTitle: Array<{ name: string; hash: string }>;
}
export default class AsideBar extends React.Component<Iprops, Istate> {
  private input: any;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      subTitle: this.props.subTitleList
    };
  }
  handleOnChange = () => {
    let subTitle = this.props.subTitleList.filter(
      item => item.name.indexOf(this.input.value) !== -1
    );
    this.setState({
      subTitle:subTitle,
    });
  };
  render() {
    const { title } = this.props;
    const { subTitle } = this.state;
    return (
      <React.Fragment>
        <nav className="nav-container">
          <div className="nav-title">{title}</div>
          <div className="input-wapper">
            <IoIosSearch className="nav-search-icon" />
            <input
              ref={input => (this.input = input)}
              type="text"
              placeholder="Type in search"
              className="nav-input"
              onChange={this.handleOnChange}
            />
          </div>
          <ul className="nav-list">
            {subTitle.map(item => (
              <li key={item.hash} className="nav-list-cld">
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
