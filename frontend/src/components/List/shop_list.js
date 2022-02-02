import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopCard from "../card/shop_card";
import "./scroll.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="app">
      <div className="flex">
        <Slider {...settings}>
          <div class="item">
            <ShopCard />
          </div>
          <div class="item">
            <ShopCard />
          </div>
          <div class="item">
            <ShopCard />
          </div>
          <div class="item">
            <ShopCard />
          </div>
          <div class="item">
            <ShopCard />
          </div>
          <div class="item">
            <ShopCard />
          </div>
        </Slider>
      </div>
    </div>
  );
}
