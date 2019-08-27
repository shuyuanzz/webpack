import * as React from "react";

interface IProps {
  count: number;
  index: number;
}
export default class Spot extends React.Component<IProps, {}> {
  render() {
    const { count, index } = this.props;
    let arr: any[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        <span className={`swiper-spot ${index === i ? "selected-spot" : ""}`}/>
      );
    }
    return <div className="spot-container">{arr}</div>;
  }
}
