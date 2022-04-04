import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let user = {
      user_email: data.get("email"),
      user_password: data.get("password"),
      user_name: data.get("Name"),
      user_address: data.get("address"),
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/user", user, {})
      .then((res) => {
        // console.log(res.data);
        if (res.data === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          alert("이미 등록된 이메일 계정입니다.");
        } else {
          alert("회원가입이 완료되었습니다.");
          document.location.href = "/login";
        }
      })
      .catch();
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
            <Link href="/" color="common.black" underline="none">
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
            <p>회원 가입</p>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="이름"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="주소"
                  id="address"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#A267E7" }}
            >
              <p>회원 가입</p>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" underline="none">
                  <p>
                    <span className="main_logo">
                      이미 계정이 있나요? 로그인
                    </span>
                  </p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
