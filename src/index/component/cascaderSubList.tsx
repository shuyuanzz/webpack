import * as React from "react";
import provinceConf from "../../../conf/province.conf";
import { IoIosArrowForward } from "react-icons/io";
import Index from "..";
interface Iprops {
  showList: boolean;
  changeValue: Function;
}
interface Istate {
  ssListIndex: number;
  sssListIndex: number;
  sListIndex: number;
}
export default class CascaderSubList extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      sListIndex: -1,
      ssListIndex: -1,
      sssListIndex: -1
    };
  }
  sShowListHandler = (index: number, name: string) => {
    this.setState({
      sListIndex: index,
      ssListIndex: -1,
      sssListIndex: -1
    });
  };
  ssShowListHandler = (index: number, name: string) => {
    this.setState({
      ssListIndex: index,
      sssListIndex: -1
    });
  };
  submitResult = (index: number, name: string) => {
    const { sListIndex, ssListIndex} = this.state;
    let resultstr: string = `${provinceConf[sListIndex].name}/${provinceConf[sListIndex].city[ssListIndex].name}/${provinceConf[sListIndex].city[ssListIndex].county[index]}`;
    this.setState({
      sssListIndex: index
    });
    this.props.changeValue(resultstr);
  };
  render() {
    const { showList } = this.props;
    const { sListIndex, ssListIndex, sssListIndex } = this.state;
    const cityList = provinceConf[sListIndex] && provinceConf[sListIndex].city;
    const countyList =
      cityList && cityList[ssListIndex] && cityList[ssListIndex].county;
    return (
      showList && (
        <div className="ca-sub-container">
          <ul className="cascader-sublist-wapper">
            {provinceConf.map((item, index) => {
              return (
                <li
                  className="ca-sub-i"
                  onClick={() => this.sShowListHandler(index, item.name)}
                  key={item.name}
                  style={sListIndex === index ? { fontWeight: "bold" } : {}}
                >
                  {item.name}
                  <IoIosArrowForward />
                </li>
              );
            })}
          </ul>
          {cityList && (
            <ul className="cascader-sublist-wapper">
              {cityList.map((item, index) => {
                return (
                  <li
                    className="ca-sub-i"
                    key={item.name}
                    onClick={() => this.ssShowListHandler(index, item.name)}
                    style={ssListIndex === index ? { fontWeight: "bold" } : {}}
                  >
                    {item.name}
                    <IoIosArrowForward />
                  </li>
                );
              })}
            </ul>
          )}
          {countyList && (
            <ul className="cascader-sublist-wapper">
              {countyList.map((item, index) => {
                return (
                  <li
                    className="ca-sub-i"
                    key={item}
                    onClick={() => this.submitResult(index, item)}
                    style={sssListIndex === index ? { fontWeight: "bold" } : {}}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )
    );
  }
}
