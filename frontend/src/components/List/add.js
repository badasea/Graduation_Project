import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopCard from "../card/shop_card";
import "./add.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="flex">
      <Slider {...settings}>
        <div>
          <ShopCard />
        </div>
        <div>
          <ShopCard />
        </div>
        <div>
          <ShopCard />
        </div>
        <div>
          <ShopCard />
        </div>
        <div>
          <ShopCard />
        </div>
        <div>
          <ShopCard />
        </div>
      </Slider>
    </div>
  );
}
