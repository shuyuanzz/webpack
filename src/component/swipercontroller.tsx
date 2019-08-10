import * as React from "react";
import Swiper from "./swiper";
const mockSwiperSlide = [
  {
    name: "slide1",
    color: "red"
  },
  {
    name: "slide2",
    color: "yellow"
  },
  {
    name: "slide3",
    color: "blue"
  },
  {
    name: "slide4",
    color: "black"
  }
];
export default class SwiperController extends React.Component<any, {}> {
  render() {
    return (
      <Swiper autoPlay hasCircle showSpot showArr>
        {mockSwiperSlide.map(item => (
          <div
            key={item.name}
            style={{ backgroundColor: item.color}}
            className="swiper-slide"
          >
            {item.name}
          </div>
        ))}
      </Swiper>
    );
  }
}
