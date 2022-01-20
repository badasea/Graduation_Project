// import axios from "axios";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";

// 로그인 및 회원 가입
import Login from "./pages/Login/login";
import SignUp from "./pages/Login/signup";

// 마이 페이지
import Mypage from "./pages/Login/mypage";

// 지역별 페이지
import Local from "./pages/category/local";

// 업종별 페이지
import Businesstype from "./pages/category/businesstype";

// 테스트
import Test from "./pages/test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/local" element={<Local />}></Route>
          <Route path="/businesstype" element={<Businesstype />}></Route>

          <Route path="/test" exact element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
