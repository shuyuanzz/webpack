import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import hashFilter from "../../tools/hashFilter"
interface Iprops {
  title: string;
  subTitleList: Array<{ name: string; hash: string }>;
}
interface Istate {
  subTitle: Array<{ name: string; hash: string }>;
  hash: string;
}
export default class AsideBar extends React.Component<Iprops, Istate> {
  private input: any;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      subTitle: this.props.subTitleList,
      hash: ""
    };
  }
  private hashHander = () => {
    this.setState({ hash: window.location.hash.substr(1) });
  };
  private handleOnChange = () => {
    let subTitle = this.props.subTitleList.filter(
      item => item.name.indexOf(this.input.value) !== -1
    );
    this.setState({
      subTitle: subTitle
    });
  };
  componentDidMount() {
    window.addEventListener("hashchange", this.hashHander);
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.hashHander);
  }
  render() {
    const { title } = this.props;
    const { subTitle } = this.state;
    const child = hashFilter(this.state.hash);
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
                <a href={`#${item.hash}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        {child}
      </React.Fragment>
    );
  }
}
