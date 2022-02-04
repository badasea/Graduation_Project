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
          <img src="../img/ad_banner.png" />
        </div>
        <div>
          <img src="../img/ad_banner2.png" />
        </div>
        <div>
          <img src="../img/ad_banner1.png" />
        </div>
      </Slider>
    </div>
  );
}
