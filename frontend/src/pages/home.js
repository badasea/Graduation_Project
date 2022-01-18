import React, { useState } from "react";
function Home() {
  const [email, setEmail] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };



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
