import React, { useEffect } from "react";
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
const theme = createTheme();

const MapContainer = () => {
  const session = JSON.parse(window.sessionStorage.getItem("map"));

  // console.log(session);
  // console.log("test");

  const { kakao } = window;
  const place = window.location.href;
  const arr = place.split("/");
  const return_shop = () => {
    document.location.href = "/detail_shop/" + arr[4];
  };
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    //위도, 경도로 변환 및 마커표시
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(session, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        map.setCenter(coords);
      }
    });
  }, []);
  return (
    <div>
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

      <CssBaseline />

      <div
        id="map"
        style={{
          width: "100%",
          height: "750px",
        }}
      ></div>
    </div>
  );
};

export default MapContainer;
