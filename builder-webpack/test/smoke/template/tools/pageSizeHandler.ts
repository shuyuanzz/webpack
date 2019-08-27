let res: Array<number> = [];
export default function pageSizeHandler(
  pageSize: number,
  itemLength: number
): Array<number> {
  if (pageSize >= itemLength) {
    res.unshift(itemLength);
    return res;
  }
  res.unshift(pageSize);
  return pageSizeHandler(pageSize * 2, itemLength);
}
