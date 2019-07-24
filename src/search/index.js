import React from "react";
import ReactDOM from "react-dom";
import "./search.less";
import { common } from "../../commons";
import { a } from "./three-shaking";
export default class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      text:null,
    }
  }
  dynamicAddComponent = () => {
    import('./text').then((text) => {
      this.setState({
        text:text.default
      })
    })
  }
  render() {
    return (
      <div className="search-text" onClick={this.dynamicAddComponent}>
        {!this.state.text? null : this.state.text()}
        Search Page 8 {a()}
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
