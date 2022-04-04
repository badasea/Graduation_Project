import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MapIcon from "@mui/icons-material/Map";
import PlaceIcon from "@mui/icons-material/Place";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";

import axios from "axios";
import { useState, useEffect } from "react";

const theme = createTheme();

export default function Shop() {
  const place = window.location.href;
  const arr = place.split("/");
  //console.log(arr[4]);

  const [shop, setShop] = useState([]);
  function searchshop() {
    const url = process.env.REACT_APP_API_URL + "/api/shop/" + arr[4];
    axios
      .get(url)
      .then(function (response) {
        setShop(response.data[0]);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  // console.log(shop);

  const [item, setItem] = useState([]);
  function searchitem() {
    const url = process.env.REACT_APP_API_URL + "/api/item/" + arr[4];
    axios
      .get(url)
      .then(function (response) {
        // console.log(response);
        setItem(response.data);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  // console.log(item);

  useEffect(() => {
    searchshop();
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

  const detail_item = (id, e) => {
    e.preventDefault();
    document.location.href = "/detail_item/" + arr[4] + "/" + id;
  };

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  var login;

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  function map() {
    const session_map = shop.shop_detail_address;
    window.sessionStorage.setItem("map", JSON.stringify(session_map));
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" style={{ background: "#fff" }}>
        <Toolbar>
          <Typography
            textAlign={"center"}
            variant="h7"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link color="common.black" underline="none">
              <p>
                <span className="main_logo">LI.CO.</span> MARKET
              </p>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            //alignItems: "center",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={shop.shop_image}
          />
          <Typography sx={{ fontSize: 24 }} align="left" underline="none">
            <p>{shop.shop_name}</p>
          </Typography>
          <Typography sx={{ fontSize: 18 }} align="left" underline="none">
            <p>{shop.shop_content}</p>
          </Typography>
          <Divider light />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="left"
                underline="none"
              >
                <p>지역구</p>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="right"
                underline="none"
              >
                <p>{shop.shop_region}</p>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="left"
                underline="none"
              >
                <p>시장 위치</p>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="right"
                underline="none"
              >
                <Link
                  href={`/map/${arr[4]}`}
                  color="common.black"
                  underline="none"
                  onClick={map}
                >
                  <p>
                    <PlaceIcon />
                    {shop.shop_address}
                  </p>
                </Link>
              </Typography>
            </Grid>
          </Grid>{" "}
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="left"
                underline="none"
              >
                <p>가게 업종</p>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="right"
                underline="none"
              >
                <p>{shop.shop_business_type}</p>
              </Typography>
            </Grid>
          </Grid>{" "}
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="left"
                underline="none"
              >
                <p>가게 번호</p>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                color="#B2B2B2"
                sx={{ fontSize: 14 }}
                align="right"
                underline="none"
              >
                <Link
                  href="tel:${shop.shop_phone}"
                  color="common.black"
                  underline="none"
                >
                  <p>{shop.shop_phone}</p>
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <br />
          {login === true ? (
            <div>
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#A267E7",
                }}
                variant="contained"
                onClick={(e) => {
                  webcam(shop.user_id, e);
                }}
              >
                <p>LIVE 방송 보러 가기</p>
              </Button>
            </div>
          ) : (
            <div>
              <Button
                disabled
                fullWidth
                sx={{
                  backgroundColor: "#A267E7",
                }}
                variant="contained"
                onClick={(e) => {
                  webcam(shop.user_id, e);
                }}
              >
                <p>로그인 후 소통해보세요.</p>
              </Button>
            </div>
          )}
          <br />
          <Divider />
          <Typography sx={{ fontSize: 24 }} align="left" underline="none">
            <p>상품 목록</p>
          </Typography>
          {item.map((items) => (
            <Container
              fixed
              onClick={(e) => {
                detail_item(items.item_id, e);
              }}
              //onClick={detail_item}
            >
              <Grid container xs={12}>
                <Grid container xs={6}>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 18 }}
                        align="left"
                        underline="none"
                      >
                        <p>{items.item_name}</p>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 14 }}
                        align="left"
                        underline="none"
                        color="#B2B2B2"
                      >
                        <p>{items.item_content}</p>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 24 }}
                        color="#A267E7"
                        underline="none"
                      >
                        <p>{items.item_price}</p>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={items.item_img}
                  />
                </Grid>
              </Grid>
              <br />
              <Divider />
              <br />
            </Container>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
