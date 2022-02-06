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

const theme = createTheme();

export default function Shop() {
  function webcam() {
    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }
  const return_shop = () => {
    document.location.href = "/detail_shop/12";
  };
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
          <img
            style={{ width: "100%", height: "100%" }}
            src="../img/test1.jpg"
          />
          <Typography sx={{ fontSize: 24 }} align="left" underline="none">
            <p>한돈 앞다리살</p>
          </Typography>
          <Typography sx={{ fontSize: 18 }} align="left" underline="none">
            <p>500g</p>
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
                <p>24000 원</p>
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
                  <button>-</button>
                  <span>&nbsp;&nbsp; 1 &nbsp;&nbsp;</span>
                  <button>+</button>
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
                <p>24000 원</p>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button fullWidth color="secondary" variant="outlined">
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
              >
                <p>주문 하기</p>
              </Button>
            </Grid>
          </Grid>
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
          <br />
          <br />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
