// import axios from "axios";
import * as React from "react";
import "./styles/video.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

// 메인 페이지
import Main from "./pages/main";
import MobileMain from "./mobile_pages/main";

// 로그인 및 회원 가입 페이지
import Login from "./pages/Login/login";
import SignUp from "./pages/Login/signup";

// 마이 페이지
import Mypage from "./pages/Login/mypage";

// 지역별 페이지
import Local from "./pages/category/local";
import MobileLocal from "./mobile_pages/category/local";
import Food from "./pages/category/food";

// 업종별 페이지
import Businesstype from "./pages/category/businesstype";
import MobileBusinesstype from "./mobile_pages/category/businesstype";

// 가게 및 상품 페이지
import Shop from "./pages/Shopping/shop";
import Item from "./pages/Shopping/item";

// 가게 관리 페이지
import Addstore from "./pages/store_manager/add_store";
import Editstore from "./pages/store_manager/edit_store";
import Check from "./pages/store_manager/check";

import ManagerItem from "./pages/store_manager/manager_item";
import EditItem from "./pages/store_manager/edit_item";
import MobileEditItem from "./mobile_pages/store_manager/edit_item";

// 장바구니 및 주문 목록
import Cart from "./pages/Shopping/cart";
import BuyList from "./pages/Shopping/buylist";

// 가게 상세 페이지 및 상품 상세 페이지
import Detailitem from "./pages/Shopping/detail_item";
import Detailshop from "./pages/Shopping/detail_shop";

// 수주 매출 페이지
import Ordersales from "./pages/store_manager/order_sales";

// 고객 센터
import Help from "./pages/Help/help";

// 소통
import Video from "./pages/communication/webcam";
import MobileVideo from "./mobile_pages/communication/webcam";

// 가게 위치 지도맵
import Map from "./pages/Shopping/map";

// 관리자 시스템
import Admin from "./admin/main";
import AdminUser from "./admin/user";
import AdminShop from "./admin/shop";
import AdminItem from "./admin/item";
import AdminOrder from "./admin/order";
import AdminHelp from "./admin/help";

// 테스트
import Test from "./pages/test";

function App() {
  return (
    <div>
      <BrowserView>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/local" element={<Local />}></Route>
            <Route path="/local/:id" element={<Local />}></Route>
            <Route path="/local/:id/food" element={<Food />}></Route>

            <Route path="/businesstype" element={<Businesstype />}></Route>
            <Route path="/businesstype/:id" element={<Businesstype />}></Route>
            <Route
              path="/businesstype/:id/:id"
              element={<Businesstype />}
            ></Route>

            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:id" element={<Shop />}></Route>

            <Route path="/detail_shop" element={<Detailshop />}></Route>
            <Route path="/detail_shop/:id" element={<Detailshop />}></Route>

            <Route path="/detail_item" element={<Detailitem />}></Route>
            <Route path="/detail_item/:id" element={<Detailitem />}></Route>
            <Route path="/detail_item/:id/:id" element={<Detailitem />}></Route>

            <Route path="/item" element={<Item />}></Route>
            <Route path="/item/:id" element={<Item />}></Route>

            <Route path="/addstore" element={<Addstore />}></Route>
            <Route path="/editstore" element={<Editstore />}></Route>

            <Route path="/check" element={<Check />}></Route>

            <Route path="/manager_item" element={<ManagerItem />}></Route>
            <Route path="/edit_item" element={<EditItem />}></Route>

            <Route path="/order_sales" element={<Ordersales />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/BuyList" element={<BuyList />}></Route>

            <Route path="/help" element={<Help />}></Route>

            <Route path="/test" exact element={<Test />}></Route>
            <Route path="/webcam/:roomId" element={<Video />} />
            <Route path="/map/:roomId" element={<Map />} />

            {/* admin */}
            <Route path="/admin" exact element={<Admin />}></Route>
            <Route path="/admin/user" exact element={<AdminUser />}></Route>
            <Route path="/admin/shop" exact element={<AdminShop />}></Route>
            <Route path="/admin/item" exact element={<AdminItem />}></Route>
            <Route path="/admin/order" exact element={<AdminOrder />}></Route>
            <Route path="/admin/help" exact element={<AdminHelp />}></Route>
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MobileMain />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/local" element={<MobileLocal />}></Route>
            <Route path="/local/:id" element={<MobileLocal />}></Route>

            <Route
              path="/businesstype"
              element={<MobileBusinesstype />}
            ></Route>
            <Route
              path="/businesstype/:id"
              element={<MobileBusinesstype />}
            ></Route>

            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:id" element={<Shop />}></Route>

            <Route path="/detail_shop" element={<Detailshop />}></Route>
            <Route path="/detail_shop/:id" element={<Detailshop />}></Route>

            <Route path="/detail_item" element={<Detailitem />}></Route>
            <Route path="/detail_item/:id" element={<Detailitem />}></Route>
            <Route path="/detail_item/:id/:id" element={<Detailitem />}></Route>

            <Route path="/item" element={<Item />}></Route>
            <Route path="/item/:id" element={<Item />}></Route>

            <Route path="/addstore" element={<Addstore />}></Route>
            <Route path="/editstore" element={<Editstore />}></Route>

            <Route path="/check" element={<Check />}></Route>

            <Route path="/manager_item" element={<ManagerItem />}></Route>
            <Route path="/edit_item" element={<MobileEditItem />}></Route>

            <Route path="/order_sales" element={<Ordersales />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/BuyList" element={<BuyList />}></Route>

            <Route path="/help" element={<Help />}></Route>

            <Route path="/test" exact element={<Test />}></Route>
            <Route path="/webcam/:roomId" element={<MobileVideo />} />
            <Route path="/map/:roomId" element={<Map />} />

            {/* admin */}
            <Route path="/admin" exact element={<Admin />}></Route>
            <Route path="/admin/user" exact element={<AdminUser />}></Route>
            <Route path="/admin/shop" exact element={<AdminShop />}></Route>
            <Route path="/admin/item" exact element={<AdminItem />}></Route>
            <Route path="/admin/order" exact element={<AdminOrder />}></Route>
            <Route path="/admin/help" exact element={<AdminHelp />}></Route>
          </Routes>
        </BrowserRouter>
      </MobileView>
    </div>
  );
}

export default App;
