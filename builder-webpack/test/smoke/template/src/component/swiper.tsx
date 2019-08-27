import * as React from "react";
import Spot from "./spot";
import SwiperArr from "./swiperarr";
interface IProps {
  size?: { height: number; width: number };
  autoPlay?: boolean;
  children?: any;
  hasCircle?: boolean;
  time?: number;
  duration?: number;
  showSpot?: boolean;
  showArr?: boolean;
}
interface IState {
  index: number;
}
export default class Swiper extends React.Component<IProps, IState> {
  private wapper: HTMLDivElement;
  private timer: any;
  private mouseStartClientX: number;
  constructor(props: IProps) {
    super(props);
    this.state = {
      index: 0
    };
  }
  static defaultProps = {
    size: { height: 300, width: 800 },
    autoPlay: false,
    hasCircle: false,
    time: 2000,
    duration: 300,
    showSpot: false,
    showArr: false
  };
  componentDidMount() {
    const { autoPlay, time, children } = this.props;
    this.wapper.style.transitionDuration = `${this.props.duration}ms`;
    if (autoPlay) {
      this.timer = setInterval(() => {
        if (this.shouldScroll(this.state.index, children.length)) {
          this.setState(prevState => ({ index: prevState.index + 1 }));
        }
      }, time);
    }
  }
  componentDidUpdate() {
    this.transform();
  }
  shouldScroll = (index: number, length: number): boolean => {
    const { hasCircle } = this.props;
    if (hasCircle && index >= length - 1) {
      this.setState({ index: 0 });
      return false;
    } else if (index >= length - 1) {
      return false;
    }
    return true;
  };
  handleTouchStart = (e: any) => {
    e.persist();
    this.mouseStartClientX = e.clientX;
  };
  handleTouchEnd = (e: any) => {
    e.persist();
    if (e.clientX < this.mouseStartClientX) {
      if (this.state.index >= this.props.children.length - 1) return;
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    } else if (e.clientX > this.mouseStartClientX) {
      if (this.state.index <= 0) return;
      this.setState(prevState => ({
        index: prevState.index - 1
      }));
    } else {
      return;
    }
  };
  changeIndex = (num: number) => {
    if (
      (num < 0 && this.state.index === 0) ||
      (num > 0 && this.state.index >= this.props.children.length - 1)
    )
      return;
    this.setState(prevState => ({
      index: prevState.index + num
    }));
  };
  transform = () => {
    this.wapper.style.transform = `translate3d(-${this.props.size.width *
      this.state.index}px,0,0)`;
  };

  render() {
    const { size, children, showSpot, showArr } = this.props;
    return (
      <div
        className="swiper-container"
        style={{ ...size }}
        onClick={() => {
          clearInterval(this.timer);
        }}
        onMouseDown={this.handleTouchStart}
        onMouseUp={this.handleTouchEnd}
      >
        <div className="swiper-wapper" ref={ele => (this.wapper = ele)}>
          {children}
        </div>
        {showSpot && <Spot count={children.length} index={this.state.index} />}
        {showArr && <SwiperArr changeIndex={this.changeIndex} />}
      </div>
    );
  }
}
