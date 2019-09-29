import * as React from "react";
import provinceConf from "../../../conf/province.conf";
import { IoIosArrowForward } from "react-icons/io";
import Index from "..";
interface Iprops {
  showList: boolean;
  changeValue: Function;
  state: {
    ssListIndex: number;
    sssListIndex: number;
    sListIndex: number;
  };
  setState: Function;
}
interface Istate {}
export default class CascaderSubList extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
  }
  sShowListHandler = (index: number) => {
    this.props.setState({
      sListIndex: index,
      ssListIndex: -1,
      sssListIndex: -1
    });
  };
  ssShowListHandler = (index: number) => {
    const { sListIndex } = this.props.state;
    this.props.setState(({
      sListIndex:sListIndex,
      ssListIndex: index,
      sssListIndex: -1
    }));
  };
  submitResult = (index: number) => {
    const { sListIndex, ssListIndex } = this.props.state;
    let resultstr: string = `${provinceConf[sListIndex].name}/${provinceConf[sListIndex].city[ssListIndex].name}/${provinceConf[sListIndex].city[ssListIndex].county[index]}`;
    this.props.setState({
      sListIndex:sListIndex,
      ssListIndex:ssListIndex,
      sssListIndex: index
    });
    this.props.changeValue(resultstr);
  };
  render() {
    const { showList } = this.props;
    const { sListIndex, ssListIndex, sssListIndex } = this.props.state;
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
                  onClick={() => this.sShowListHandler(index)}
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
                    onClick={() => this.ssShowListHandler(index)}
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
                    onClick={() => this.submitResult(index)}
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
