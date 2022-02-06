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
  const detail_item = () => {
    document.location.href = "/detail_item/12";
  };

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
            src="../img/test.jpg"
          />
          <Typography sx={{ fontSize: 24 }} align="left" underline="none">
            <p>바다네 생선가게</p>
          </Typography>
          <Typography sx={{ fontSize: 18 }} align="left" underline="none">
            <p>싱싱한 영등포 활어 전문점</p>
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
                <p>영등포구</p>
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
                <p>영등포시장</p>
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
                <p>음식점</p>
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
                <p>010-1234-5678</p>
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Button
            fullWidth
            sx={{
              backgroundColor: "#A267E7",
            }}
            variant="contained"
          >
            <p>LIVE 방송 보러 가기</p>
          </Button>
          <br />
          <Divider />
          <Typography sx={{ fontSize: 24 }} align="left" underline="none">
            <p>상품 목록</p>
          </Typography>
          <Container fixed onClick={detail_item}>
            <Grid container xs={12}>
              <Grid container xs={6}>
                <Grid container item xs={12}>
                  <Grid item>
                    <Typography
                      sx={{ fontSize: 18 }}
                      align="left"
                      underline="none"
                    >
                      <p>한돈 앞다리살</p>
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
                      <p>500g</p>
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
                      <p>24,000</p>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../img/test1.jpg"
                />{" "}
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container xs={12}>
              <Grid container xs={6}>
                <Grid container item xs={12}>
                  <Grid item>
                    <Typography
                      sx={{ fontSize: 18 }}
                      align="left"
                      underline="none"
                    >
                      <p>한돈 앞다리살</p>
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
                      <p>500g</p>
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
                      <p>24,000</p>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../img/test1.jpg"
                />{" "}
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container xs={12}>
              <Grid container xs={6}>
                <Grid container item xs={12}>
                  <Grid item>
                    <Typography
                      sx={{ fontSize: 18 }}
                      align="left"
                      underline="none"
                    >
                      <p>한돈 앞다리살</p>
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
                      <p>500g</p>
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
                      <p>24,000</p>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../img/test1.jpg"
                />{" "}
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
