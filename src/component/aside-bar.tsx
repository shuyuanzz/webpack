import * as React from "react";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import hashFilter from "./hashFilter";
import GitHubSvg from "./github-svg";
import hasLogin from "../../tools/hasLogin";
import CookieManagement from "../../tools/cookieManagement";
interface Iprops {
  title: string;
  subTitleList: Array<{ name: string; hash: string }>;
  changePage: Function;
}
interface Istate {
  subTitle: Array<{ name: string; hash: string }>;
  hash: string;
  showList: boolean;
  currentPage: string;
}
export default class AsideBar extends React.Component<Iprops, Istate> {
  private input: any;
  private cookieManagement:CookieManagement;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      subTitle: this.props.subTitleList,
      hash: window.location.hash.substr(1),
      showList: false,
      currentPage: ""
    };
    this.cookieManagement = new CookieManagement();
  }
  private changeListState = () => {
    this.setState(prevState => {
      return {
        showList: !prevState.showList
      };
    });
  };

  private hashHander = () => {
    this.setState({ hash: window.location.hash.substr(1) });
  };
  private handleOnChange = () => {
    let subTitle = this.props.subTitleList.filter(
      item => item.name.toUpperCase().indexOf(this.input.value.toUpperCase()) !== -1
    );
    this.setState({
      subTitle: subTitle
    });
  };
  private logout = () => {
    this.cookieManagement.removeItem('login',null,null);
    this.props.changePage("login");
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.hashHander);
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.hashHander);
  }
  render() {
    const { title, changePage } = this.props;
    const { subTitle, showList, currentPage } = this.state;
    const child = hashFilter(this.state.hash);
    return (
      <div className="main-container">
        <header>
          <IoIosMenu className="menu" onClick={this.changeListState} />
          <a href={window.location.pathname}>{title}</a>
          <ul className={showList ? "show" : ""}>
            {subTitle.map(item => (
              <li key={item.hash}>
                <a href={`#${item.hash}`} onClick={this.changeListState}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </header>
        <nav className="nav-container">
          <a href={window.location.pathname} className="nav-title">
            {title}
          </a>
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
                <a
                  href={`#${item.hash}`}
                  onClick={() => {
                    this.setState({
                      currentPage: item.name
                    });
                  }}
                  className={currentPage === item.name ? "selected" : ""}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {child}
        <GitHubSvg />
        {hasLogin() ? (
          <div className="login-regist">
            <span onClick={this.logout}>退出登陆</span>
          </div>
        ) : (
          <div className="login-regist">
            <a
              onClick={() => {
                changePage("login");
              }}
            >
              登陆
            </a>
            <a
              onClick={() => {
                changePage("regist");
              }}
            >
              注册
            </a>
          </div>
        )}
      </div>
    );
  }
}
