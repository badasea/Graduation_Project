import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import axios from "axios";
import { useState, useEffect } from "react";

const theme = createTheme();

export default function Shop() {
  const session = JSON.parse(window.sessionStorage.getItem("data"));

  const place = window.location.href;
  const arr = place.split("/");
  // console.log(arr[5]);
  const [item, setItem] = useState([]);
  function searchitem() {
    const url = process.env.REACT_APP_API_URL + "/api/item/item/" + arr[5];
    axios
      .get(url)
      .then(function (response) {
        // console.log(response);
        setItem(response.data[0]);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  //console.log(item);
  const [shop, setShop] = useState([]);
  function searchshop() {
    const url = process.env.REACT_APP_API_URL + "/api/shop/" + arr[4];
    axios
      .get(url)
      .then(function (response) {
        // console.log(response);
        setShop(response.data[0]);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  // console.log(shop);
  useEffect(() => {
    searchitem();
    searchshop();
  }, []);

  const return_shop = () => {
    document.location.href = "/detail_shop/" + arr[4];
  };

  const [number, setNumber] = useState(0);

  // const onNumberHandler = (event) => {
  //   setNumber(event.currentTarget.value);
  // };
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let dateString = year + "" + month + "" + day;

  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);
  let seconds = ("0" + today.getSeconds()).slice(-2);

  let timeString = hours + ":" + minutes + ":" + seconds;

  // console.log(dateString + " " + timeString);

  var formatedMysqlString = new Date(
    new Date(new Date(new Date()).toISOString()).getTime() -
      new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const buy = () => {
    //console.log('click cart')
    //console.log('itemId : ', item_data_session.item_data.itemId)
    //console.log('count : ', number)
    let data = {
      order_date: formatedMysqlString,
      order_state: "cart",
      order_item_name: item.item_name,
      order_price: item.item_price,
      order_shop_name: shop.shop_name,
      order_stock: number,
      order_shop_id: arr[4],
      order_user_id: session.data.user_id,
    };
    // console.log(data);
    axios
      .post(process.env.REACT_APP_API_URL + "/api/order/", data, {
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        //console.log(res.data)
        alert("장바구니에서 구매를 완료해주세요.");
        window.close();
      })
      .catch();
  };

  const cart = () => {
    //console.log('click cart')
    //console.log('itemId : ', item_data_session.item_data.itemId)
    //console.log('count : ', number)
    let data = {
      order_date: dateString + " " + timeString,
      order_item_name: item.item_name,
      order_state: "cart",
      order_price: item.item_price,
      order_shop_name: shop.shop_name,
      order_stock: number,
      order_shop_id: arr[4],
      order_user_id: session.data.user_id,
    };
    // console.log(data);
    axios
      .post(process.env.REACT_APP_API_URL + "/api/order/", data, {
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        //console.log(res.data)
        alert("해당 상품이 장바구니에 담겼습니다.");
        document.location.href = "/detail_shop/" + arr[4];
      })
      .catch();
  };

  var login;

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" style={{ background: "#fff" }}>
        <Toolbar>
          <ArrowBackIcon onClick={return_shop} color="secondary" />
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
          <img style={{ width: "100%", height: "100%" }} src={item.item_img} />
          <Typography sx={{ fontSize: 24 }} align="left" underline="none">
            <p>{item.item_name}</p>
          </Typography>
          <Typography sx={{ fontSize: 18 }} align="left" underline="none">
            <p>{item.item_content}</p>
          </Typography>
          <Divider />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography sx={{ fontSize: 14 }} align="left" underline="none">
                <p>가격</p>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography sx={{ fontSize: 14 }} align="right" underline="none">
                <p>{item.item_price} 원</p>
              </Typography>
            </Grid>
          </Grid>
          <Divider light />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography sx={{ fontSize: 14 }} align="left" underline="none">
                <p>수량</p>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography sx={{ fontSize: 14 }} align="right" underline="none">
                <p>
                  {number > 0 ? (
                    <button onClick={onDecrease}>-</button>
                  ) : (
                    <button disabled onClick={onDecrease}>
                      -
                    </button>
                  )}
                  <span>&nbsp;&nbsp; {number} &nbsp;&nbsp;</span>
                  <button onClick={onIncrease}>+</button>
                </p>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography sx={{ fontSize: 14 }} align="left" underline="none">
                <p>총 주문 금액</p>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography sx={{ fontSize: 14 }} align="right" underline="none">
                <p>{item.item_price * number} 원</p>
              </Typography>
            </Grid>
          </Grid>
          {login === true ? (
            <div>
              {number > 0 ? (
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button
                      onClick={cart}
                      fullWidth
                      color="secondary"
                      variant="outlined"
                    >
                      <p>장바구니 넣기</p>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: "#A267E7",
                      }}
                      variant="contained"
                      onClick={buy}
                    >
                      <p>주문 하기</p>
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      color="secondary"
                      variant="outlined"
                      disabled
                    >
                      <p>장바구니 넣기</p>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: "#A267E7",
                      }}
                      variant="contained"
                      disabled
                    >
                      <p>주문 하기</p>
                    </Button>
                  </Grid>
                </Grid>
              )}
              <br />
              <Grid container spacing={0.1}>
                <Button
                  onClick={return_shop}
                  fullWidth
                  sx={{
                    backgroundColor: "#A267E7",
                  }}
                  variant="contained"
                >
                  <p>다른 상품 보러 가기</p>
                </Button>
              </Grid>
            </div>
          ) : (
            <Grid container spacing={0.1}>
              <Button
                disabled
                onClick={return_shop}
                fullWidth
                sx={{
                  backgroundColor: "#A267E7",
                }}
                variant="contained"
              >
                <p>로그인 후 이용가능합니다.</p>
              </Button>
            </Grid>
          )}
          <br />
          <br />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
