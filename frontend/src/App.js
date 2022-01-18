// import axios from "axios";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";

// 로그인 및 회원 가입
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
