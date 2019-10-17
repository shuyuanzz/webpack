import * as React from "react";
import { hour, mAndS ,emptyArr} from "../../../conf/timeData";

interface IState {
  showList: boolean;
}
export default class TimePicker extends React.Component<{}, IState> {
  private h: HTMLElement;
  private m: HTMLElement;
  private s: HTMLElement;
  constructor(props: {}) {
    super(props);
    this.state = {
      showList: false
    };
  }
  timePickerClickHandler = (e: any) => {
    const clickedEle = e.target;
    const tpResWp = document.querySelector(".tp-res-wp");
    if (tpResWp && tpResWp.contains(clickedEle as Node)) {
      return;
    } else {
      this.setState(prevState => ({
        showList: !prevState.showList
      }));
    }
  };
  itemClickHandle = (e: any, item: string ,parent:HTMLElement) => {
    e.persist();
    console.log(e.target.offsetTop-e.target.parentNode.offsetTop,parent)
    parent.scrollTo(0,e.target.offsetTop-e.target.parentNode.offsetTop)
  };
  componentDidMount() {
    const body = document.querySelector("body");
    body.addEventListener("click", e => this.timePickerClickHandler(e));
  }
  render() {
    const { showList } = this.state;
    return (
      <div className="tp-wp">
        <h3>TimePicker</h3>
        <div className="tp-ct mt50">
          {!showList && (
            <input
              type="text"
              placeholder="请选择时间"
              className="tp-input"
              onClick={e => this.timePickerClickHandler(e)}
              readOnly
            />
          )}
        </div>
        {showList && (
          <div className="tp-res-wp mt50">
            <div className="tp-res"></div>
            <div className="tp-list-ct">
              <ul className="tp-list" ref={ele => (this.h = ele)}>
                {hour.map(item => (
                  <li
                    key={item}
                    onClick={e => this.itemClickHandle(e, item, this.h)}
                  >
                    {item}
                  </li>
                ))}
                {emptyArr.map((item,index) => <li key={index}>{item}</li>)}
              </ul>
              <ul className="tp-list" ref={ele => (this.m = ele)}>
                {mAndS.map(item => (
                  <li
                    key={item}
                    onClick={e => this.itemClickHandle(e, item, this.m)}
                  >
                    {item}
                  </li>
                ))}
                {emptyArr.map((item,index) => <li key={index}>{item}</li>)}
              </ul>
              <ul className="tp-list" ref={ele => (this.s = ele)}>
                {mAndS.map(item => (
                  <li
                    key={item}
                    onClick={e => this.itemClickHandle(e, item, this.s)}
                  >
                    {item}
                  </li>
                ))}
                {emptyArr.map((item,index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
