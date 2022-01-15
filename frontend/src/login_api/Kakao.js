import React, { Component } from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";

const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

const buttonBlock = {
  border: "none",
  borderRadius: "9px",
  fontSize: "17px",
  width: "284px",
  fontWeight: "500",
  height: "32px",
  cursor: "pointer",
  background: "#fae101",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  padding: "4px 0px",
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
`;
class LoginKaKao extends Component {
  render() {
    function login(response) {
      console.log(response.profile.properties.nickname);
    }
    return (
      <div>
        <KaKaoLogin
          token={KAKAO_KEY}
          buttonText="kakao"
          onSuccess={login}
          onFail={console.error}
          onLogout={console.info}
          style={buttonBlock}
        >
          <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
        </KaKaoLogin>
      </div>
    );
  }
}

export default LoginKaKao;
