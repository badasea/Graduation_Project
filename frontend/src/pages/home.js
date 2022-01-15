import React, { useState } from "react";
import GoogleLoginBtn from "../login_api/Google";
function Home() {
  const [email, setEmail] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  function webcam() {
    setCookie("cookie", email, 1);

    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }

  console.log(process.env.REACT_APP_GOOGLE_ID);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={webcam}>웹캠 입장하기</button>
      <br />
      <br />
      <input type="text" value={email} onChange={onEmailHandler}></input>
      <button onClick={webcam}>웹캠 입장하기</button>
      <GoogleLoginBtn />
    </div>
  );
}

export default Home;
