import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./add.css";
import "./advertisement.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>광고배너1</h3>
        </div>
        <div>
          <h3>광고배너2</h3>
        </div>
        <div>
          <h3>광고배너3</h3>
        </div>
        <div>
          <h3>광고배너4</h3>
        </div>
        <div>
          <h3>광고배너5</h3>
        </div>
        <div>
          <h3>광고배너6</h3>
        </div>
      </Slider>
    </div>
  );
}
