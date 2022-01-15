// import axios from "axios";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

// 로그인
import Login from "./pages/login";
import KakaoLogin from "./login_api/KakaoLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/kakaologin" element={<KakaoLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
