import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";

import axios from "axios";

// 소셜 로그인
import GoogleLoginBtn from "../../login_api/Google";
import KakaoLogin from "../../login_api/Kakao";
import NaverLogin from "../../login_api/Naver";

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    // console.log(user);
    //setCookie("cookie", data.get("email"), 1);
    var url = process.env.REACT_APP_API_URL + "/api/user/login/" + user.email;
    axios
      .get(url)
      .then(function (res) {
        if (res.data[0].user_email === undefined) {
          alert("입력하신 이메일과 비밀번호가 일치하지 않습니다.");
        } else if (res.data[0].user_email === "admin") {
          alert("리코 관리자님 환영합니다.");
          document.location.href = "/admin";
        } else if (res.data[0].user_email === null) {
          alert("입력하신 이메일과 비밀번호가 일치하지 않습니다.");
        } else if (
          res.data[0].user_email === user.email &&
          res.data[0].user_email !== "admin" &&
          res.data[0].user_password === user.password
        ) {
          alert(res.data[0].user_name + "님 환영합니다.");
          const session = res.data[0];
          const userObj = { data: session };
          window.sessionStorage.setItem("data", JSON.stringify(userObj));

          const session_type = res.data[0].user_type;
          window.sessionStorage.setItem("type", JSON.stringify(session_type));

          document.location.href = "/";
        }
      })
      .catch(function (error) {
        //console.log("실패");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(../../img/login.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        /> */}
      <AppBar position="fixed" style={{ background: "#fff" }}>
        <Toolbar>
          <Typography
            textAlign={"center"}
            variant="h7"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link href="/" color="common.black" underline="none">
              <p>
                <span className="main_logo">LI.CO.</span> MARKET
              </p>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br />

          {/* <Typography component="h1" variant="h5">
            <p>
              <span className="main_logo">LI.CO.</span> MARKET
            </p>
          </Typography> */}
          <Typography component="h1" variant="h5">
            <p>로그인</p>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              //id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              //id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, backgroundColor: "#A267E7" }}
            >
              <p>로그인</p>
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2" underline="none">
                  <p>
                    <span className="main_logo">
                      {"회원이 아니신가요? 회원 가입"}
                    </span>
                  </p>
                </Link>
              </Grid>
            </Grid>
            <br />
            <Typography
              textAlign={"center"}
              variant="h7"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link color="common.black" underline="none">
                <p>SNS계정으로 로그인하기</p>
              </Link>
            </Typography>

            <Grid align="center" container spacing={2}>
              <Grid item xs={4}>
                {/* <IconButton
                    aria-label="google"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{ background: "#fff" }}
                  >
                    <Avatar src="../img/google.png"></Avatar>
                  </IconButton> */}
                <GoogleLoginBtn />
              </Grid>
              <Grid item xs={4}>
                <KakaoLogin />
              </Grid>
              <Grid item xs={4}>
                {/* <IconButton
                    aria-label="naver"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{ background: "#06BC00" }}
                  >
                    <Avatar src="../img/naver.png"></Avatar>
                  </IconButton> */}
                <NaverLogin />
              </Grid>
            </Grid>
            {/* <br />
              <GoogleLoginBtn />
              <br />
              <NaverLogin /> */}
          </Box>
        </Box>
      </Container>
      {/* </Grid> */}
      {/* </Grid> */}
    </ThemeProvider>
  );
}
