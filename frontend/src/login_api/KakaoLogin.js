import React from "react";

const { Kakao } = window;
const loginWithKakao = () => {
  console.log("hello");
  Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/kakao/login",
  });
};

const KakaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
