import * as React from "react";
interface Iprops {
  showList: boolean;
}
export default class CascaderSubList extends React.Component<Iprops, {}> {
  render() {
    const { showList } = this.props;
    return (
      showList && (
        <ul className="cascader-sublist-wapper">
          <li className="ca-sub-i">subList</li>
        </ul>
      )
    );
  }
}
