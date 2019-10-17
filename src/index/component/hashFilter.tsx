import Pagination from "./pagination";
import * as React from "react";
import SwiperController from "./swipercontroller";
import AutoCompleteBox from "./autoComplete";
import InfiniteScrolling from "./infiniteScrolling"
import autoCompleteOption from "../../../conf/autoCompleteOption";
import Cascader from "./cascader";
import TimePicker from "./timePicker";
export default function hashFilter(hash: string) {
  switch (hash) {
    case "":
      return "index";
    case "StaticPage":
      return <a href="./demo/webscan.html">click here</a>;
    case "Swiper":
      return <SwiperController />;
    case "Pagination":
      return <Pagination initialPageSize={5} itemList={{ length: 100 }} />;
    case "AutoComplete": 
      return <AutoCompleteBox optionList={autoCompleteOption}/>;
    case "InfiniteScrolling":
      return <InfiniteScrolling listLength={15}/>
    case "Cascader":
      return <Cascader/>
    case "TimePicker":
      return <TimePicker/>
  }
}
