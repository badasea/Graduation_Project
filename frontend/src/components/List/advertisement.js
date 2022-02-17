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
          <img width="100%" height="100%" src="../img/ad_banner.png" />
        </div>
        <div>
          <img width="100%" height="100%" src="../img/ad_banner3.png" />
        </div>
        <div>
          <img width="100%" height="100%" src="../img/ad_banner4.png" />
        </div>
      </Slider>
    </div>
  );
}
