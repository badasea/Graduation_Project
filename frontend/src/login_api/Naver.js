import React, { Component } from "react";
import axios from "axios";

class NaverLogin extends Component {
  componentDidMount() {
    // Naver sdk import
    const naverScript = document.createElement("script");
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    // Naver sdk 스크립트 로드 완료시
    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER_KEY,
        callbackUrl: process.env.REACT_APP_CLLBACK_URI,
        callbackHandle: true,
        isPopup: false, // 로그인 팝업여부
        loginButton: {
          color: "green", // 색상(white, green)
          type: 3, // 버튼타입(1,2,3)
          height: 60, // 배너 및 버튼 높이
        },
      });

      naverLogin.init();
      naverLogin.logout(); // 네이버 로그인이 계속 유지되는 경우가 있다. 초기화시 로그아웃
      naverLogin.getLoginStatus((status) => {
        if (status) {
          console.log(naverLogin.user);
          let data = {
            user_email: naverLogin.user.email,
            user_name: naverLogin.user.name,
          };
          axios.post("/api/user", data).then(function (res) {
            console.log(res.data);
          });
          var url = "/api/user/login/" + data.user_email;
          axios
            .get(url)
            .then(function (response) {
              console.log(response.data);
              document.location.href = "/main";
            })
            .catch(function (error) {
              //console.log("실패");
            });
        } else {
          console.log("error");
        }
      });
    };
  }

  render() {
    return <div id="naverIdLogin"></div>;
  }
}

export default NaverLogin;
