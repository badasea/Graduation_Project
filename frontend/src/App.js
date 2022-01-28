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

// 가게 및 상품
import Shop from "./pages/Shopping/shop";
import Item from "./pages/Shopping/item";

// 가게 관리
import Addstore from "./pages/store_manager/add_store";
import Editstore from "./pages/store_manager/edit_store";

import AddItem from "./pages/store_manager/add_item";
import EditItem from "./pages/store_manager/edit_item";

// 장바구니 및 주문 목록
import Cart from "./pages/Shopping/cart";
import BuyList from "./pages/Shopping/buylist";

// 고객 센터
import Help from "./pages/Help/help";

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
          <Route path="/local/:id" element={<Local />}></Route>

          <Route path="/businesstype" element={<Businesstype />}></Route>
          <Route path="/businesstype/:id" element={<Businesstype />}></Route>

          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<Shop />}></Route>

          <Route path="/item" element={<Item />}></Route>
          <Route path="/item/:id" element={<Item />}></Route>

          <Route path="/addstore" element={<Addstore />}></Route>
          <Route path="/editstore" element={<Editstore />}></Route>

          <Route path="/additem" element={<AddItem />}></Route>
          <Route path="/edititem" element={<EditItem />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/BuyList" element={<BuyList />}></Route>

          <Route path="/help" element={<Help />}></Route>

          <Route path="/test" exact element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
