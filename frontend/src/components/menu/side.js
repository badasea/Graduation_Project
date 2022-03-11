import * as React from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// 사이드바 아이콘
import ListSubheader from "@mui/material/ListSubheader";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import MapIcon from "@mui/icons-material/Map";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import BrushIcon from "@mui/icons-material/Brush";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpIcon from "@mui/icons-material/Help";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Side() {
  const [sideopen, setOpenside] = React.useState(false);
  const [side2open, setOpenside2] = React.useState(false);
  const [side3open, setOpenside3] = React.useState(false);

  const handleClick = () => {
    setOpenside(!sideopen);
  };
  const handleClick2 = () => {
    setOpenside2(!side2open);
  };
  const handleClick3 = () => {
    setOpenside3(!side3open);
  };

  const logout = () => {
    sessionStorage.removeItem("data");

    document.location.href = "/";
  };

  const mypage = () => {
    document.location.href = "/mypage";
  };

  const seongbuck = () => {
    document.location.href = "/local/seongbuck";
  };
  const yeongdeungpo = () => {
    document.location.href = "/local/yeongdeungpo";
  };
  const jongno = () => {
    document.location.href = "/local/jongno";
  };

  const restaurant = () => {
    document.location.href = "/businesstype/restaurant";
  };

  const hanbok = () => {
    document.location.href = "/businesstype/hanbok";
  };
  const craftshop = () => {
    document.location.href = "/businesstype/craftshop";
  };
  const etc = () => {
    document.location.href = "/businesstype/etc";
  };

  const addstore = () => {
    document.location.href = "/addstore";
  };
  const editstore = () => {
    document.location.href = "/editstore";
  };

  const manageritem = () => {
    document.location.href = "/manager_item";
  };

  const cart = () => {
    document.location.href = "/cart";
  };
  const buylist = () => {
    document.location.href = "/buylist";
  };
  const loginpage = () => {
    document.location.href = "/login";
  };
  const order_sales = () => {
    document.location.href = "/order_sales";
  };
  const help = () => {
    document.location.href = "/help";
  };

  const webcam = (id, e) => {
    e.preventDefault();
    window.open("/webcam/" + id, "", "toolbar=no, menubar=no, resizable=yes");
  };

  const [shop, setShop] = useState([]);

  function searchshop() {
    const url = process.env.REACT_APP_API_URL + "/api/shop/user/";
    axios
      .get(url)
      .then(function (response) {
        // console.log(response);
        setShop(response.data[0]);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  useEffect(() => {
    searchshop();
  }, []);

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));
  const session_type = JSON.parse(window.sessionStorage.getItem("type"));

  // console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  return (
    <div>
      {login === true ? (
        <List>
          <ListItemButton>
            {["마이 페이지"].map((text, index) => (
              <ListItem button key={text} onClick={mypage}>
                <ListItemIcon>
                  {img !== undefined ? (
                    <AccountCircleIcon
                      sx={{ width: 46, height: 46 }}
                      color="secondary"
                    />
                  ) : (
                    <Avatar src={session.data.user_img}></Avatar>
                  )}{" "}
                </ListItemIcon>
                <Link color="common.black" underline="none">
                  <ListItemText />
                  마이 페이지
                </Link>
              </ListItem>
            ))}
          </ListItemButton>
        </List>
      ) : (
        <List>
          {["로그인"].map((text, index) => (
            <ListItem button key={text} onClick={loginpage}>
              <ListItemIcon>
                <AccountCircleIcon color="secondary" />{" "}
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                로그인
              </Link>
            </ListItem>
          ))}
        </List>
      )}
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Link color="common.black" underline="none">
              카테고리별 구분
            </Link>
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <MapIcon color="secondary" />
          </ListItemIcon>
          <Link color="common.black" underline="none">
            <ListItemText />
            지역별 시장
          </Link>
          {sideopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={sideopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={seongbuck} sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                성북구
              </Link>
            </ListItemButton>
            <ListItemButton onClick={yeongdeungpo} sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                영등포구
              </Link>
            </ListItemButton>
            <ListItemButton onClick={jongno} sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                종로구
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 업종별 */}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick2}>
          <ListItemIcon>
            <CheckroomIcon color="secondary" />
          </ListItemIcon>
          <Link color="common.black" underline="none">
            <ListItemText />
            업종
          </Link>
          {side2open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={side2open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={restaurant} sx={{ pl: 4 }}>
              <ListItemIcon>
                <FoodBankIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                음식점
              </Link>
            </ListItemButton>
            <ListItemButton onClick={hanbok} sx={{ pl: 4 }}>
              <ListItemIcon>
                <CheckroomIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                한복
              </Link>
            </ListItemButton>
            <ListItemButton onClick={craftshop} sx={{ pl: 4 }}>
              <ListItemIcon>
                <BrushIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                공방
              </Link>
            </ListItemButton>
            <ListItemButton onClick={etc} sx={{ pl: 4 }}>
              <ListItemIcon>
                <MoreHorizIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                기타 업종
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 가게 */}
      {login === true ? (
        <div>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Link color="common.black" underline="none">
                  가게 관리
                </Link>
              </ListSubheader>
            }
          >
            <ListItemButton onClick={handleClick3}>
              <ListItemIcon>
                <StoreIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                가게
              </Link>{" "}
              {side3open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={side3open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {session_type !== "seller" ? (
                  <div>
                    <ListItemButton onClick={addstore} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <AddBusinessIcon color="secondary" />
                      </ListItemIcon>
                      <Link color="common.black" underline="none">
                        <ListItemText />
                        가게 등록
                      </Link>
                    </ListItemButton>
                  </div>
                ) : (
                  <div>
                    <ListItemButton onClick={editstore} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <SettingsIcon color="secondary" />
                      </ListItemIcon>
                      <Link color="common.black" underline="none">
                        <ListItemText />
                        가게 수정
                      </Link>
                    </ListItemButton>
                    <ListItemButton onClick={manageritem} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <AddCircleIcon color="secondary" />
                      </ListItemIcon>
                      <Link color="common.black" underline="none">
                        <ListItemText />
                        상품 관리
                      </Link>
                    </ListItemButton>
                    <ListItemButton onClick={order_sales} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <MonetizationOnIcon color="secondary" />
                      </ListItemIcon>
                      <Link color="common.black" underline="none">
                        <ListItemText />
                        수주 · 매출
                      </Link>
                    </ListItemButton>
                    <ListItemButton
                      onClick={(e) => {
                        webcam(session.data.user_id, e);
                      }}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon>
                        <PodcastsIcon color="secondary" />
                      </ListItemIcon>
                      <Link color="common.black" underline="none">
                        <ListItemText />
                        방송 시작하기
                      </Link>
                    </ListItemButton>
                  </div>
                )}
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            {["장바구니"].map((text, index) => (
              <ListItem button key={text} onClick={cart}>
                <ListItemIcon>
                  {index === 0 ? <ShoppingBagIcon color="secondary" /> : <></>}
                </ListItemIcon>
                <Link color="common.black" underline="none">
                  <ListItemText />
                  장바 구니
                </Link>
              </ListItem>
            ))}
          </List>
          <List>
            {["주문 목록"].map((text, index) => (
              <ListItem button key={text} onClick={buylist}>
                <ListItemIcon>
                  {index === 0 ? <CreditScoreIcon color="secondary" /> : <></>}
                </ListItemIcon>
                <Link color="common.black" underline="none">
                  <ListItemText />
                  주문 목록
                </Link>
              </ListItem>
            ))}
          </List>
          <List>
            {["고객 센터"].map((text, index) => (
              <ListItem button key={text} onClick={help}>
                <ListItemIcon>
                  {index === 0 ? <HelpIcon color="secondary" /> : <></>}
                </ListItemIcon>
                <Link color="common.black" underline="none">
                  <ListItemText />
                  고객 센터
                </Link>
              </ListItem>
            ))}
          </List>
          <List>
            {["로그아웃"].map((text, index) => (
              <ListItem button key={text} onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon color="secondary" />
                </ListItemIcon>
                <Link color="common.black" underline="none">
                  <ListItemText />
                  로그 아웃
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
