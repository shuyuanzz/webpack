import Pagination from "./pagination";
import * as React from "react";
import SwiperController from "./swipercontroller";
export default function hashFilter(hash: string) {
  switch (hash) {
    case "":
      return "index";
    case "staticPage":
      return <a href="./demo/webscan.html">click here</a>;
    case "Swiper":
      return <SwiperController />;
    case "Pagination":
      return <Pagination initialPageSize={5} itemList={{ length: 100 }} />;
  }
}
