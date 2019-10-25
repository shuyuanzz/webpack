import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface IProps {
  goBack:Function;
  goFoward:Function;
}
export default class SwiperArr extends React.Component<IProps, {}> {
  render() {
    const {goFoward , goBack} = this.props;
    return (
      <div className="swiper-arr">
        <IoIosArrowBack
          className="swiper-arrow"
          onClick={() => goBack()}
        />
        <IoIosArrowForward
          className="swiper-arrow"
          onClick={() => goFoward()}
        />
      </div>
    );
  }
}
