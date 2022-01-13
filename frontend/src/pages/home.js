// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
// import queryString from "query-string";

const socketClient = io("http://localhost:443");

function Home() {
  const [email, setEmail] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  // useEffect(() => {
  //   socketClient.on("connect", () => {
  //     console.log("connection server");
  //   });
  // });
  function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  function webcam() {
    // socketClient.on("connect", () => {
    //   console.log("connection server");
    // });
    setCookie("cookie", email, 1);

    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={webcam}>웹캠 입장하기</button>
      <br />
      <br />
      <input type="text" value={email} onChange={onEmailHandler}></input>
      <button onClick={webcam}>웹캠 입장하기</button>
    </div>
  );
}

export default Home;
