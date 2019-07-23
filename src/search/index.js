import React from "react";
import ReactDOM from "react-dom";
import "./search.less";
import { common } from "../../commons";
import { a } from "./three-shaking";
export default class Search extends React.Component {
  render() {
    debugger
    return (
      <div className="search-text">
        Search Page 8 {a()}
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));