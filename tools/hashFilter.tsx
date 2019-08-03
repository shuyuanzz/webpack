import Pagination from "../src/component/pagination";
import * as React from 'react';
export default function hashFilter(hash: string) {
  switch (hash) {
    case "":
      return "index";
    case "test1":
      return "test1";
    case "test2":
      return "test2";
    case "Pagination":
      return <Pagination initialPageSize={5} itemList={{length:100}}/>
  }
}
