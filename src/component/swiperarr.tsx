import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface IProps {
  changeIndex: Function;
}
export default class SwiperArr extends React.Component<IProps, {}> {
  render() {
    const { changeIndex } = this.props;
    return (
      <div className="swiper-arr">
        <IoIosArrowBack
          className="swiper-arrow"
          onClick={() => changeIndex(-1)}
        />
        <IoIosArrowForward
          className="swiper-arrow"
          onClick={() => changeIndex(1)}
        />
      </div>
    );
  }
}
