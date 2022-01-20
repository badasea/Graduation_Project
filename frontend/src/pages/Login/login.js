import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

import axios from "axios";

// 소셜 로그인
import GoogleLoginBtn from "../../login_api/Google";
import KakaoLogin from "../../login_api/Kakao";
import NaverLogin from "../../login_api/Naver";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © LICO Market "}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(user);
    setCookie("cookie", data.get("email"), 1);
    var url = "/api/user/login/" + user.email;
    axios
      .get(url)
      .then(function (res) {
        if (res.data[0].user_email === undefined) {
          alert("입력하신 이메일과 비밀번호가 일치하지 않습니다.");
        } else if (res.data[0].user_email === null) {
          alert("입력하신 이메일과 비밀번호가 일치하지 않습니다.");
        } else if (
          res.data[0].user_email === user.email &&
          res.data[0].user_email !== "admin" &&
          res.data[0].user_password === user.password
        ) {
          alert(res.data[0].user_name + "님 환영합니다.");
          document.location.href = "/main";
        } else if (res.data[0].user_email === "admin") {
          // 관리자 페이지
          alert("관리자님 환영합니다.");
        }
      })
      .catch(function (error) {
        //console.log("실패");
      });
  };

  function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <AppBar position="fixed" style={{ background: "rgb(26, 29, 41)" }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" color="inherit" underline="none">
                리코 마켓
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              리코 마켓 로그인
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
                sx={{ mt: 3, mb: 2 }}
                style={{ background: "rgb(26, 29, 41)" }}
              >
                로그인
              </Button>

              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"회원이 아니신가요? 회원 가입"}
                  </Link>
                </Grid>
              </Grid>
              <br />
              <GoogleLoginBtn />
              <br />
              <KakaoLogin />
              <br />
              <NaverLogin />
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
