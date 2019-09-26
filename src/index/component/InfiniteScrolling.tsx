import * as React from "react";
import listData from "../../conf/infiniListData";
interface Iprops {
  listLength: number;
}
interface Istate {
  startIndex: number;
  endIndex: number;
}
export default class InfiniteScrolling extends React.Component<Iprops, Istate> {
  private topElement: HTMLElement;
  private bottomElement: HTMLElement;
  private observer: IntersectionObserver;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: props.listLength
    };
  }
  componentDidMount() {
    this.intiateScrollObserver();
  }
  componentDidUpdate() {
    this.intiateScrollObserver();
  }
  intiateScrollObserver() {
    if (!this.topElement || !this.bottomElement) return;
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
      if (entry.isIntersecting && entry.target.id === "top" && this.state.startIndex > 0) {
  
        this.setState(prevState => ({
          startIndex: prevState.startIndex - 1,
          endIndex: prevState.endIndex - 1
        }));
      }
      if (entry.isIntersecting && entry.target.id === "bottom" && this.state.endIndex < listData.length) {
        this.setState(prevState => ({
          startIndex: prevState.startIndex + 1,
          endIndex: prevState.endIndex + 1
        }));
      }
    });
  }
  render() {
    console.log('length',listData.length)
    const { endIndex, startIndex } = this.state;
    console.log('endIndex',endIndex)
    console.log('startIndex',startIndex)
    const newListData: Array<{key:number,value:number}> = listData.slice(
      startIndex,
      endIndex
    );
    return (
      <ul className="card-wapper">
        {newListData.map(item => (
          <li
            key={item.key}
            className="li-card"
            style={{ top: 195 * item.key }}
            ref={node => {
              if (item.key === startIndex) this.topElement = node;
              if (item.key === endIndex - 1) this.bottomElement = node;
            }}
            id={
              item.key === startIndex
                ? "top"
                : item.key === endIndex - 1
                ? "bottom"
                : "else"
            }
          >
            {item.value}
          </li>
        ))}
      </ul>
    );
  }
}
