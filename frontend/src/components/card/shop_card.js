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

function ShopCard() {
  //const session = JSON.parse(window.sessionStorage.getItem("data"));

  const [shop, setShop] = useState([]);
  function searchshop() {
    const url = "/api/shop/user/2";
    axios
      .get(url)
      .then(function (response) {
        //console.log(response);
        setShop(response.data[0]);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchshop();
  }, []);

  function webcam() {
    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }

  return (
    <div>
      <Container fixed>
        <img style={{ width: "100%", height: "350px" }} src="../img/test.jpg" />
        <Typography
          sx={{ fontSize: 12 }}
          align="right"
          color="#A267E7"
          underline="none"
        >
          <p>2022 .05 .04 LIVE OPEN</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ width: 24, height: 24, bgcolor: deepPurple[500] }}
            ></Avatar>
            <Link color="common.black" underline="none">
              {shop.shop_address}
            </Link>
          </Stack>
        </Typography>
        <Divider light />
        <Typography sx={{ fontSize: 18 }} underline="none">
          <p> {shop.shop_name}</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="#B2B2B2" underline="none">
          <p>
            {shop.shop_region} · {shop.shop_business_type}
          </p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="#202121" underline="none">
          <p>{shop.shop_content}</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button fullWidth color="secondary" variant="outlined">
              <p>가게 입장하기</p>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
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
      </Container>
    </div>
  );
}

export default ShopCard;
