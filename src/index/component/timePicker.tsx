import * as React from "react";

interface IState {
  showList: boolean;
}
export default class TimePicker extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showList: false
    };
  }
  render() {
    const { showList } = this.state;
    return (
      <div className="tp-wp">
        <h3>TimePicker</h3>
        <div className="tp-ct mt50">
          <input
            type="text"
            placeholder="请选择时间"
            className="tp-input"
            readOnly
          />
        </div>
        {showList && <div className="tp-list-ct">
            
        </div>}
      </div>
    );
  }
}
