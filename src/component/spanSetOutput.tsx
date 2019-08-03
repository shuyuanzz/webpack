import * as React from "react";
export default function spanSetOutput(pageCount: number, currentPage: number) {
  let spanSet = [];
  for (let i = 1; i <= pageCount; i++) {
    spanSet.push(
      <span
        className={`page-number ${i === currentPage ? "selected-page" : ""}`}
        key={i}
        onClick={() => this.toCurrentPage(i)}
      >
        {i}
      </span>
    );
  }
  return spanSet;
}
