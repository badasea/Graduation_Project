import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scroll.css";

function ShopCard() {
  //const session = JSON.parse(window.sessionStorage.getItem("data"));

  const [shop, setShop] = useState([]);
  function searchshop() {
    const url = process.env.REACT_APP_API_URL + "/api/shop";
    axios
      .get(url)
      .then(function (response) {
        var arr = [];
        var i = 0;
        while (i < 5) {
          var rand = Math.floor(Math.random() * response.data.length);
          if (!sameNum(response.data[rand])) {
            arr.push(response.data[rand]);
            i++;
          }
        }

        function sameNum(n) {
          for (var i = 0; i < arr.length; i++) {
            if (n === arr[i]) {
              return true;
            }
          }
          return false;
        }
        setShop(arr);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  // console.log(shop);

  useEffect(() => {
    searchshop();
  }, []);

  // 배포
  const webcam = (id, e) => {
    e.preventDefault();
    window.open(
      "/webcam/" + id,
      "",
      "width=1200, height=1200, toolbar=no, menubar=no, resizable=yes"
    );
  };

  const detail_shop = (id, e) => {
    e.preventDefault();
    window.open(
      "/detail_shop/" + id,
      "",
      "width=600, height=800, toolbar=no, menubar=no, resizable=yes"
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const session = JSON.parse(window.sessionStorage.getItem("data"));
  var login;

  if (session === null) {
    login = false;
  } else {
    login = true;
  }
  return (
    <div className="app">
      <div className="flex">
        <Slider {...settings}>
          {shop.map((shops) => (
            <div>
              <Container fixed>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={shops.shop_image}
                />
                <Typography
                  sx={{ fontSize: 12 }}
                  align="right"
                  color="#A267E7"
                  underline="none"
                >
                  <p>LIVE OPEN</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      src={shops.user_img}
                      sx={{
                        width: 24,
                        height: 24,
                      }}
                    ></Avatar>
                    <Link color="common.black" underline="none">
                      {shops.shop_address}
                    </Link>
                  </Stack>
                </Typography>
                <Divider light />
                <Typography sx={{ fontSize: 18 }} underline="none">
                  <p> {shops.shop_name}</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="#B2B2B2"
                  underline="none"
                >
                  <p>
                    {shops.shop_region} · {shops.shop_business_type}
                  </p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="#202121"
                  underline="none"
                >
                  <p>{shops.shop_content}</p>
                </Typography>
                {login === false ? (
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button
                        onClick={(e) => {
                          detail_shop(shops.shop_id, e);
                        }}
                        fullWidth
                        color="secondary"
                        variant="outlined"
                      >
                        <p>가게 입장하기</p>
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        disabled
                        onClick={(e) => {
                          webcam(shops.user_id, e);
                        }}
                        fullWidth
                        sx={{
                          backgroundColor: "#A267E7",
                        }}
                        variant="contained"
                      >
                        <p>로그인 후 소통해보세요.</p>
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button
                        onClick={(e) => {
                          detail_shop(shops.shop_id, e);
                        }}
                        fullWidth
                        color="secondary"
                        variant="outlined"
                      >
                        <p>가게 입장하기</p>
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        onClick={(e) => {
                          webcam(shops.user_id, e);
                        }}
                        fullWidth
                        sx={{
                          backgroundColor: "#A267E7",
                        }}
                        variant="contained"
                      >
                        <p>방송보기</p>
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </Container>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ShopCard;
