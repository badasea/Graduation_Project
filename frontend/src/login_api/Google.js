import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_ID;

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = (response) => {
    console.log(response.profileObj);
  };

  const onFailure = (error) => {
    console.log(error);
  };

  const logout = () => {
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_name");
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="구글 로그인"
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <GoogleLogout
        clientId={clientId}
        buttonText="로그아웃"
        onLogoutSuccess={logout}
      />
    </div>
  );
}
