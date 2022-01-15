import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_ID;

export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = (response) => {
    console.log(response.profileObj);
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
