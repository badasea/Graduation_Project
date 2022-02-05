import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { width } from "@mui/system";
import styled from "styled-components";

const clientId = process.env.REACT_APP_GOOGLE_ID;

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = (response) => {
    console.log(response.profileObj);
    let data = {
      user_email: response.profileObj.email,
      user_name: response.profileObj.name,
      user_img: response.profileObj.imageUrl,
    };

    axios.post("/api/user", data).then(function (res) {
      console.log(res.data);
    });
    var url = "/api/user/login/" + data.user_email;
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setCookie("cookie", response.data[0].user_name, 1);
        const session = response.data[0];
        const userObj = { data: session };
        window.sessionStorage.setItem("data", JSON.stringify(userObj));
        document.location.href = "/";
      })
      .catch(function (error) {
        //console.log("실패");
      });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }
  return (
    <div>
      <GoogleLogin
        theme="dark"
        clientId={clientId}
        buttonText="구글 아이디로 로그인"
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
