import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const clientId = process.env.REACT_APP_GOOGLE_ID;

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = (response) => {
    console.log(response.profileObj);
    let data = {
      user_email: response.profileObj.email,
      user_name: response.profileObj.name,
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
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        theme="dark"
        clientId={clientId}
        buttonText="구글 로그인"
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
