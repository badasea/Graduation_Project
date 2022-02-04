import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "../card/item_card";
import "./scroll.css";

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
          <div class="item">
            <ItemCard />
          </div>
          <div class="item">
            <ItemCard />
          </div>
          <div class="item">
            <ItemCard />
          </div>
          <div class="item">
            <ItemCard />
          </div>
          <div class="item">
            <ItemCard />
          </div>
          <div class="item">
            <ItemCard />
          </div>
        </Slider>
      </div>
    </div>
  );
}
