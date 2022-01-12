import * as React from "react";

function Home() {
  function webcam() {
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
    </div>
  );
}

export default Home;
