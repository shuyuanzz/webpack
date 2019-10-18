import * as React from "react";
import { hour, mAndS, emptyArr } from "../../../conf/timeData";
import { IoMdTime, IoIosClose } from "react-icons/io";

interface IState {
  showList: boolean;
  hou: string;
  min: string;
  sec: string;
  selectedValue: string;
}
export default class TimePicker extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showList: false,
      hou: "00",
      min: "00",
      sec: "00",
      selectedValue: ""
    };
  }
  clearSleectedValue = (e: any) => {
    e.stopPropagation();
    this.setState({
      selectedValue: "",
      hou: "00",
      min: "00",
      sec: "00"
    });
  };
  clickHandler = () => {
    this.setState({
      showList: true
    });
  };
  timePickerClickHandler = (e: Event) => {
    const { showList } = this.state;
    const clickedEle = e.target;
    const tpResWp = document.querySelector(".tp-res-wp");
    if (!showList) {
      return;
    }
    if (tpResWp && tpResWp.contains(clickedEle as Node)) {
      return;
    } else {
      this.setState(prevState => ({
        showList: !prevState.showList,
        selectedValue: `${prevState.hou} : ${prevState.min} : ${prevState.sec}`
      }));
    }
  };
  itemClickHandle = (e: any, item: string, type: string) => {
    e.persist();
    e.target.parentNode.scrollTop =
      e.target.offsetTop - e.target.parentNode.offsetTop;
    switch (type) {
      case "h":
        this.setState({
          hou: item
        });
        break;
      case "m":
        this.setState({
          min: item
        });
        break;
      case "s":
        this.setState({
          sec: item
        });
    }
  };
  componentDidMount() {
    const body = document.querySelector("body");
    body.addEventListener("click", e => this.timePickerClickHandler(e));
  }
  render() {
    const { showList, selectedValue, hou, min, sec } = this.state;
    return (
      <div className="tp-wp">
        <h3>TimePicker</h3>
        <div
          className="tp-ct mt50"
          style={showList ? { opacity: 0, position: "fixed" } : null}
        >
          <>
            <input
              type="text"
              placeholder="请选择时间"
              className="tp-input"
              onClick={this.clickHandler}
              readOnly
              value={selectedValue}
            />
            {selectedValue.length > 0 ? (
              <IoIosClose
                className="tp-md-time"
                onClick={e => this.clearSleectedValue(e)}
              />
            ) : (
              <IoMdTime className="tp-md-time" />
            )}
          </>
        </div>
        {showList && (
          <div className="tp-res-wp mt50">
            <div className="tp-res">{`${hou} : ${min} : ${sec}`}</div>
            <div className="tp-list-ct">
              <ul className="tp-list">
                {hour.map(item => (
                  <li
                    key={item}
                    onClick={e => this.itemClickHandle(e, item, "h")}
                    style={
                      hou === item
                        ? { backgroundColor: "#69b6e9", fontWeight: "bold" }
                        : null
                    }
                  >
                    {item}
                  </li>
                ))}
                {emptyArr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="tp-list">
                {mAndS.map(item => (
                  <li
                    key={item}
                    onClick={e => this.itemClickHandle(e, item, "m")}
                    style={
                      min === item
                        ? { backgroundColor: "#69b6e9", fontWeight: "bold" }
                        : null
                    }
                  >
                    {item}
                  </li>
                ))}
                {emptyArr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="tp-list">
                {mAndS.map(item => (
                  <li
                    key={item}
                    onClick={e => this.itemClickHandle(e, item, "s")}
                    style={
                      sec === item
                        ? { backgroundColor: "#69b6e9", fontWeight: "bold" }
                        : null
                    }
                  >
                    {item}
                  </li>
                ))}
                {emptyArr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
