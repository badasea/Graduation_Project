import React, { useState } from "react";
function Main() {
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

  return (
    <div>
      <h1>로그인 후 메인 화면 입니다.</h1>
      <button onClick={webcam}>웹캠 입장하기</button>
      <br />
      <br />
      <input type="text" value={email} onChange={onEmailHandler}></input>
      <button onClick={webcam}>웹캠 입장하기</button>
    </div>
  );
}

export default Main;
