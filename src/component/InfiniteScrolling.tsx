import * as React from "react";
import listData from "../../conf/infiniListData";
interface Iprops {
  listLength: number;
}
export default class InfiniteScrolling extends React.Component<Iprops, {}> {
  private topElement: HTMLElement;
  private bottomElement: HTMLElement;
  private observer: IntersectionObserver;
  private startIndex: number;
  private endIndex: number;
  constructor(props: Iprops) {
    super(props);
    this.startIndex = 0;
    this.endIndex = props.listLength;
  }
  componentDidMount() {
    this.intiateScrollObserver();
  }
  componentDidUpdate() {
    this.intiateScrollObserver();
  }
  intiateScrollObserver() {
    if(!this.topElement || this.bottomElement) return;
    this.observer = new IntersectionObserver(
      entries => this.observerCallBack(entries),
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.1]
      }
    );
    this.observer.observe(this.topElement);
    this.observer.observe(this.bottomElement);
  }
  observerCallBack(entries: Array<IntersectionObserverEntry>) {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id === "top") {
        console.log("top", "top show");
      }
      if (entry.isIntersecting && entry.target.id === "bottom") {
        console.log("bottom", "bottom show");
      }
    });
  }
  render() {
    const newListData: Array<{ key: number; value: number }> = listData.slice(
      this.startIndex,
      this.endIndex
    );
    return (
      <ul className="card-wapper">
        {newListData.map(item => (
          <li
            key={item.key}
            className="li-card"
            style={{ top: 195 * item.key }}
            ref={node => {
              if (item.key === 0) this.topElement = node;
              if (item.key === 14) this.bottomElement = node;
            }}
            id={item.key === 0 ? "top" : item.key === 14 ? "bottom" : "else"}
          >
            {item.value}
          </li>
        ))}
      </ul>
    );
  }
}
