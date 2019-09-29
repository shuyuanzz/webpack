import * as React from "react";
import "../../../styleSheet/cascader.css";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import CascaderSubList from "./cascaderSubList";
interface Istate {
  arrDown: boolean;
  resultValue: string;
  listState: {
    ssListIndex: number;
    sssListIndex: number;
    sListIndex: number;
  };
}
export default class Cascader extends React.Component<{}, Istate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      listState:{
        sListIndex: -1,
        ssListIndex:-1,
        sssListIndex:-1,
      },
      arrDown: true,
      resultValue: ""
    };
  }
  changeArrDirection = () => {
    this.setState(prevState => ({
      arrDown: !prevState.arrDown
    }));
  };
  clearValue = () => {
    this.setState({
      resultValue: "",
      arrDown: true,
      listState: {
        sListIndex: -1,
        ssListIndex:-1,
        sssListIndex:-1,
      },
    });
  };
  changeValue = (value: string) => {
    this.setState({
      resultValue: value,
      arrDown: true
    });
  };
  
  render() {
    console.log('state',this.state.listState)
    const { arrDown, resultValue, listState } = this.state;
    return (
      <div className="cascader-wapper">
        <h3>Cascader</h3>
        <input
          type="text"
          placeholder="Please select"
          className="cascader-input"
          value={resultValue}
          onClick={this.changeArrDirection}
          readOnly
        />
        {resultValue.length === 0 ? (
          <IoIosArrowDown
            className="cascader-input-arr"
            style={arrDown ? {} : { transform: "rotate(180deg)" }}
          />
        ) : (
          <div onClick={this.clearValue}>
            <IoIosClose className="cascader-input-arr" />
          </div>
        )}
        <br />
        <CascaderSubList
          showList={!arrDown}
          changeValue={this.changeValue}
          state={listState}
          setState={(newSate:any) => {this.setState({listState: newSate})}}
        />
      </div>
    );
  }
}
