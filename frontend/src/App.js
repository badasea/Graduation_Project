// import axios from "axios";
import * as React from "react";
import "./styles/video.css";

// 라우터
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 운영체제 구분
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

import Jongno from "./pages/category/detail/jongno";
import Seongbuck from "./pages/category/detail/seongbuck";
import Yeongdeungpo from "./pages/category/detail/yeongdeungpo";

import MobileJongno from "./mobile_pages/category/detail/jongno";
import MobileSeongbuck from "./mobile_pages/category/detail/seongbuck";
import MobileYeongdeungpo from "./mobile_pages/category/detail/yeongdeungpo";

import Food from "./pages/category/detail/food";
import Hanbok from "./pages/category/detail/hanbok";
import Craftshop from "./pages/category/detail/craftshop";
import Etc from "./pages/category/detail/etc";

import MobileFood from "./mobile_pages/category/detail/food";
import MobileHanbok from "./mobile_pages/category/detail/hanbok";
import MobileCraftshop from "./mobile_pages/category/detail/craftshop";
import MobileEtc from "./mobile_pages/category/detail/etc";

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

// 장바구니 및 주문 목록
import Cart from "./pages/Shopping/cart";
import BuyList from "./pages/Shopping/buylist";

// 가게 상세 페이지 및 상품 상세 페이지
import Detailitem from "./pages/Shopping/detail_item";
import Detailshop from "./pages/Shopping/detail_shop";

// 수주 매출 페이지
import Ordersales from "./pages/store_manager/order_sales";
import MobileOrdersales from "./mobile_pages/store_manager/order_sales";

// 고객 센터
import Help from "./pages/Help/help";
import HelpPost from "./pages/Help/post";
import HelpEdit from "./pages/Help/edit";
import HelpDetail from "./pages/Help/detail";

// 소통
import Video from "./pages/communication/webcam";
import MobileVideo from "./mobile_pages/communication/webcam";

// 가게 위치 지도맵
import Map from "./pages/Shopping/map";

// 관리자 시스템
import Admin from "./admin/main";
import AdminUser from "./admin/user/user";
import AdminUserEdit from "./admin/user/edit";
import AdminShop from "./admin/shop/shop";
import AdminShopEdit from "./admin/shop/edit";
import AdminItem from "./admin/item/item";
import AdminItemEdit from "./admin/item/edit";
import AdminOrder from "./admin/order/order";
import AdminOrderEdit from "./admin/order/edit";
import AdminHelp from "./admin/help/help";
import AdminHelpEdit from "./admin/help/edit";

import MobileAdmin from "./mobile_pages/admin/main";

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
            <Route path="/local/:id/hanbok" element={<Hanbok />}></Route>
            <Route path="/local/:id/craftshop" element={<Craftshop />}></Route>
            <Route path="/local/:id/etc" element={<Etc />}></Route>

            <Route path="/businesstype" element={<Businesstype />}></Route>
            <Route path="/businesstype/:id" element={<Businesstype />}></Route>
            <Route
              path="/businesstype/:id/seongbuck"
              element={<Seongbuck />}
            ></Route>
            <Route path="/businesstype/:id/jongno" element={<Jongno />}></Route>
            <Route
              path="/businesstype/:id/yeongdeungpo"
              element={<Yeongdeungpo />}
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
            <Route path="/help/post" element={<HelpPost />}></Route>
            <Route path="/help/edit" element={<HelpEdit />}></Route>
            <Route path="/help/detail" element={<HelpDetail />}></Route>

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
            <Route
              path="/admin/user/edit"
              exact
              element={<AdminUserEdit />}
            ></Route>
            <Route
              path="/admin/shop/edit"
              exact
              element={<AdminShopEdit />}
            ></Route>
            <Route
              path="/admin/item/edit"
              exact
              element={<AdminItemEdit />}
            ></Route>
            <Route
              path="/admin/order/edit"
              exact
              element={<AdminOrderEdit />}
            ></Route>
            <Route
              path="/admin/help/edit"
              exact
              element={<AdminHelpEdit />}
            ></Route>
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
            <Route path="/local/:id" element={<Local />}></Route>

            <Route path="/local/:id/food" element={<MobileFood />}></Route>
            <Route path="/local/:id/hanbok" element={<MobileHanbok />}></Route>
            <Route
              path="/local/:id/craftshop"
              element={<MobileCraftshop />}
            ></Route>
            <Route path="/local/:id/etc" element={<MobileEtc />}></Route>

            <Route
              path="/businesstype"
              element={<MobileBusinesstype />}
            ></Route>
            <Route path="/businesstype/:id" element={<Businesstype />}></Route>
            <Route
              path="/businesstype/:id/seongbuck"
              element={<MobileSeongbuck />}
            ></Route>
            <Route
              path="/businesstype/:id/jongno"
              element={<MobileJongno />}
            ></Route>
            <Route
              path="/businesstype/:id/yeongdeungpo"
              element={<MobileYeongdeungpo />}
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

            <Route path="/order_sales" element={<MobileOrdersales />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/BuyList" element={<BuyList />}></Route>

            <Route path="/help" element={<Help />}></Route>
            <Route path="/help/post" element={<HelpPost />}></Route>
            <Route path="/help/edit" element={<HelpEdit />}></Route>
            <Route path="/help/detail" element={<HelpDetail />}></Route>

            <Route path="/test" exact element={<Test />}></Route>
            <Route path="/webcam/:roomId" element={<MobileVideo />} />
            <Route path="/map/:roomId" element={<Map />} />

            {/* admin */}
            <Route path="/admin" exact element={<MobileAdmin />}></Route>
            <Route path="/admin/user" exact element={<AdminUser />}></Route>
            <Route path="/admin/shop" exact element={<AdminShop />}></Route>
            <Route path="/admin/item" exact element={<AdminItem />}></Route>
            <Route path="/admin/order" exact element={<AdminOrder />}></Route>
            <Route path="/admin/help" exact element={<AdminHelp />}></Route>
            <Route
              path="/admin/user/edit"
              exact
              element={<AdminUserEdit />}
            ></Route>
            <Route
              path="/admin/shop/edit"
              exact
              element={<AdminShopEdit />}
            ></Route>
            <Route
              path="/admin/item/edit"
              exact
              element={<AdminItemEdit />}
            ></Route>
            <Route
              path="/admin/order/edit"
              exact
              element={<AdminOrderEdit />}
            ></Route>
            <Route
              path="/admin/help/edit"
              exact
              element={<AdminHelpEdit />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </MobileView>
    </div>
  );
}

export default App;
