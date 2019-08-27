import * as React from "react";
export default function spanSetOutput(
  pageCount: number,
  currentPage: number,
  toCurrentPage: Function
) {
  let spanSet: any[] = [];
  if (pageCount <= 5) {
    for (let i = 1; i <= pageCount; i++) {
      spanSet.push(
        <span
          className={`page-number ${i === currentPage ? "selected-page" : ""}`}
          key={i}
          onClick={() => toCurrentPage(i)}
        >
          {i}
        </span>
      );
    }
  } else if (currentPage <= 5) {
    console.log('1')
    for (let i = 1; i <= 5; i++) {
      spanSet.push(
        <span
          className={`page-number ${i === currentPage ? "selected-page" : ""}`}
          key={i}
          onClick={() => toCurrentPage(i)}
        >
          {i}
        </span>
      );
    }
    spanSet.push(
      <span className={`page-number`} key="...">
        {`...`}
      </span>
    );
    spanSet.push(
      <span
        className={`page-number ${
          pageCount === currentPage ? "selected-page" : ""
        }`}
        key={pageCount}
        onClick={() => toCurrentPage(pageCount)}
      >
        {pageCount}
      </span>
    );
  } else if (currentPage > pageCount - 5) {
    spanSet.push(
      <span
        className={`page-number ${1 === currentPage ? "selected-page" : ""}`}
        key={1}
        onClick={() => toCurrentPage(1)}
      >
        {1}
      </span>
    );
    spanSet.push(
      <span className={`page-number`} key="...">
        {`...`}
      </span>
    );
    for (let i = pageCount - 4; i <= pageCount; i++) {
      spanSet.push(
        <span
          className={`page-number ${i === currentPage ? "selected-page" : ""}`}
          key={i}
          onClick={() => toCurrentPage(i)}
        >
          {i}
        </span>
      );
    }
  } else {
    spanSet.push(
      <span
        className={`page-number ${1 === currentPage ? "selected-page" : ""}`}
        key={1}
        onClick={() => toCurrentPage(1)}
      >
        {1}
      </span>
    );
    spanSet.push(
      <span className={`page-number`} key="...">
        {`...`}
      </span>
    );
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      spanSet.push(
        <span
          className={`page-number ${i === currentPage ? "selected-page" : ""}`}
          key={i}
          onClick={() => toCurrentPage(i)}
        >
          {i}
        </span>
      );
    }
    spanSet.push(
      <span className={`page-number`} key="111">
        {`....`}
      </span>
    );
    spanSet.push(
      <span
        className={`page-number ${
          pageCount === currentPage ? "selected-page" : ""
        }`}
        key={pageCount}
        onClick={() => toCurrentPage(pageCount)}
      >
        {pageCount}
      </span>
    );
  }
  return spanSet;
}
