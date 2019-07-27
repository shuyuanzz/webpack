import * as React from "react";
export interface IProps {
  compiler: string;
}

export default class HelloComponent extends React.Component<IProps, {}> {
  render() {
    const { compiler } = this.props;
    return <div>this is a {compiler} project</div>;
  }
}
