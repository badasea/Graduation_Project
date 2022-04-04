import React, { useEffect, useRef } from "react";
import NaverLogin from "react-login-by-naver";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import axios from "axios";

function LoginNaver() {
  const naverRef = useRef();
  useEffect(() => {
    const naverScript = document.createElement("script");
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER_KEY,
        callbackUrl: process.env.REACT_APP_CLLBACK_URI,
        callbackHandle: true,
        isPopup: false,
        loginButton: {
          color: "green",
          type: 3,
          height: 55,
        },
      });
      naverLogin.init();
      naverLogin.logout(); //네이버 로그인이 계속 유지되는 경우가 있음, 초기화시 로그아웃
    };
  }, []);

  function login(naverUser) {
    // console.log(naverUser.user);
    let data = {
      user_email: naverUser.user.email,
      user_name: naverUser.user.name,
      user_sns: "true",
    };

    axios.post("/api/user", data).then(function (res) {
      // console.log(res.data);
    });
    var url =
      process.env.REACT_APP_API_URL + "/api/user/login/" + data.user_email;
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data);
        // setCookie("cookie", response.data[0].user_name, 1);
        const session = response.data[0];
        const userObj = { data: session };
        window.sessionStorage.setItem("data", JSON.stringify(userObj));
        const session_type = response.data[0].user_type;
        window.sessionStorage.setItem("type", JSON.stringify(session_type));

        //document.location.href = "/";
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  return (
    <>
      <NaverLogin
        clientId={process.env.REACT_APP_NAVER_KEY}
        callbackUrl={process.env.REACT_APP_CLLBACK_URI}
        render={(props) => (
          <div onClick={props.onClick}>
            <IconButton
              aria-label="naver"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ background: "#06BC00" }}
            >
              <Avatar src="../img/naver.png"></Avatar>
            </IconButton>
          </div>
        )}
        onSuccess={login}
        //onFailure={() => console.error(result)}
      />
    </>
  );
}

export default LoginNaver;
