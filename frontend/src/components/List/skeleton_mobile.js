import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scroll.css";
import SkeletonCard from "../card/skeleton_card";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="app">
      <div className="flex">
        <Slider {...settings}>
          <div>
            <SkeletonCard />
          </div>
          <div>
            <SkeletonCard />
          </div>
        </Slider>
      </div>
    </div>
  );
}
