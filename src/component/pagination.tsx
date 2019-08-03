import * as React from "react";
import "../styleSheet/pagination.css";
import pageSizeHandler from "../../tools/pageSizeHandler";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { number } from "prop-types";
import spanSetOutput from "./spanSetOutput";
interface Iprops {
  initialPageSize: number;
  itemList: any;
}
interface Istate {
  pageSize: number;
  showPopup: boolean;
  pageIndex: number;
  currentPage: number;
}
export default class Pagination extends React.Component<Iprops, Istate> {
  private pageSizeSet: number[];
  private pageCount: number;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      pageSize: this.props.initialPageSize,
      showPopup: false,
      pageIndex: 1,
      currentPage: 1
    };
    this.pageSizeSet = pageSizeHandler(
      props.initialPageSize,
      props.itemList.length
    );
    this.pageCount = Math.ceil(props.itemList.length / this.state.pageSize);
  }
  changePopupStatus = (): void => {
    this.setState(prevState => {
      return {
        showPopup: !prevState.showPopup
      };
    });
  };
  changePageSize = (pageSizeNumber: number): void => {
    this.setState({
      pageSize: pageSizeNumber,
      currentPage: 1
    });
  };
  prevPage = (): void => {
    if (this.state.currentPage <= 1) return;
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage - 1
      };
    });
  };
  nextPage = (): void => {
    if (this.state.currentPage >= this.pageCount) return;
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1
      };
    });
  };
  toCurrentPage = (index: number): void => {
    this.setState({
      currentPage: index
    });
  };
  render() {
    const { initialPageSize, itemList } = this.props;
    if (!initialPageSize && !itemList) return;
    const { pageSize, showPopup, pageIndex, currentPage } = this.state;
    this.pageCount = Math.ceil(itemList.length / this.state.pageSize);
    return (
      <div className="pagination-container">
        <div className="page-picker">
          <div className="pagesize-changer" onClick={this.changePopupStatus}>
            <ul>
              <li key={pageSize}>{pageSize}</li>
              {showPopup &&
                this.pageSizeSet.map(item => {
                  if (item === pageSize) return null;
                  return (
                    <li key={item} onClick={() => this.changePageSize(item)}>
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div>
          <span className="pagenation-count">{`${(pageIndex - 1) * pageSize +
            1}-${pageIndex * pageSize} of ${itemList.length}`}</span>
          <IoIosArrowBack
            className={`arrow ${currentPage === 1 ? "disable-button" : ""}`}
            onClick={this.prevPage}
          />
          {spanSetOutput(this.pageCount, currentPage, this.toCurrentPage)}
          <IoIosArrowForward
            className={`arrow ${
              currentPage === this.pageCount ? "disable-button" : ""
            }`}
            onClick={this.nextPage}
          />
        </div>
      </div>
    );
  }
}
