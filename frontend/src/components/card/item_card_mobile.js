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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scroll.css";

import axios from "axios";
import { useState, useEffect } from "react";

function ShopCard() {
  const [item, setItem] = useState([]);
  function searchitem() {
    const url = process.env.REACT_APP_API_URL + "/api/item";
    axios
      .get(url)
      .then(function (response) {
        //console.log(response.data);
        //var rand = Math.floor(Math.random() * response.data.length);
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
        setItem(arr);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  //console.log(item);

  useEffect(() => {
    searchitem();
  }, []);

  // 배포
  const webcam = (id, e) => {
    e.preventDefault();
    window.open(
      "/webcam/" + id,
      "",
      "width=600, height=800, toolbar=no, menubar=no, resizable=yes"
    );
  };

  const detail_shop = (shop_id, item_id, e) => {
    e.preventDefault();
    window.open(
      "/detail_item/" + shop_id + "/" + item_id,
      "",
      "width=600, height=800, toolbar=no, menubar=no, resizable=yes"
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          {item.map((items) => (
            <div>
              <Container fixed>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={items.item_img}
                />
                <Typography
                  sx={{ fontSize: 13 }}
                  align="right"
                  color="#B2B2B2"
                  underline="none"
                >
                  <p>
                    {items.shop_address} · {items.shop_business_type}
                  </p>
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Avatar
                    src={items.user_img}
                    sx={{ width: 24, height: 24 }}
                  ></Avatar>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#202121"
                    gutterBottom
                  >
                    <Link color="common.black" underline="none">
                      {items.shop_name}
                    </Link>
                  </Typography>
                </Stack>

                <Divider light />
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <p>{items.item_name}</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="#B2B2B2"
                  underline="none"
                >
                  <p>{items.item_content}</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 24 }}
                  color="#A267E7"
                  underline="none"
                >
                  <p>{items.item_price} 원</p>
                </Typography>
                {login === false ? (
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button
                        onClick={(e) => {
                          detail_shop(items.shop_id, items.item_id, e);
                        }}
                        fullWidth
                        color="secondary"
                        variant="outlined"
                      >
                        <p>상품 구매하기</p>
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        disabled
                        fullWidth
                        sx={{
                          backgroundColor: "#A267E7",
                        }}
                        variant="contained"
                        onClick={(e) => {
                          webcam(items.user_id, e);
                        }}
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
                          detail_shop(items.shop_id, items.item_id, e);
                        }}
                        fullWidth
                        color="secondary"
                        variant="outlined"
                      >
                        <p>상품 구매하기</p>
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        sx={{
                          backgroundColor: "#A267E7",
                        }}
                        variant="contained"
                        onClick={(e) => {
                          webcam(items.user_id, e);
                        }}
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
