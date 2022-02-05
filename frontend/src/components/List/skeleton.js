import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scroll.css";
import Skeleton from "@mui/material/Skeleton";
import Skeleton_Card from "../card/skeleton_card";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="app">
      <div className="flex">
        <Slider {...settings}>
          <div>
            <Skeleton_Card />
          </div>
          <div>
            <Skeleton_Card />
          </div>
          <div>
            <Skeleton_Card />
          </div>
          <div>
            <Skeleton_Card />
          </div>
        </Slider>
      </div>
    </div>
  );
}
