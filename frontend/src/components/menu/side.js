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
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "@mui/material";

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

  const additem = () => {
    document.location.href = "/additem";
  };
  const edititem = () => {
    document.location.href = "/edititem";
  };
  const cart = () => {
    document.location.href = "/cart";
  };
  const buylist = () => {
    document.location.href = "/buylist";
  };

  function webcam() {
    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }

  const user_type = "consumer";

  return (
    <div>
      <List>
        <ListItemButton>
          {["마이 페이지"].map((text, index) => (
            <ListItem button key={text} onClick={mypage}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </ListItemButton>
      </List>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            카테고리별 구분
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="지역별 시장" />
          {sideopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={sideopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="성북구" onClick={seongbuck} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="영등포구" onClick={yeongdeungpo} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="종로구" onClick={jongno} />
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
            <CheckroomIcon />
          </ListItemIcon>
          <ListItemText primary="업종" />
          {side2open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={side2open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FoodBankIcon />
              </ListItemIcon>
              <ListItemText primary="음식점" onClick={restaurant} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CheckroomIcon />
              </ListItemIcon>
              <ListItemText primary="한복" onClick={hanbok} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BrushIcon />
              </ListItemIcon>
              <ListItemText primary="공방" onClick={craftshop} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
              <ListItemText primary="기타" onClick={etc} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 가게 */}
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            가게 관리
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick3}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="가게" />
          {side3open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={side3open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {user_type !== "seller" ? (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AddBusinessIcon />
                </ListItemIcon>
                <ListItemText primary="가게 등록" onClick={addstore} />
              </ListItemButton>
            ) : (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="가게 수정" onClick={editstore} />
              </ListItemButton>
            )}

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="상품 등록" onClick={additem} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="상품 수정" onClick={edititem} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PodcastsIcon />
              </ListItemIcon>
              <ListItemText primary="방송 시작하기" onClick={webcam} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {["장바구니"].map((text, index) => (
          <ListItem button key={text} onClick={cart}>
            <ListItemIcon>
              {index === 0 ? <ShoppingBagIcon /> : <></>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["주문 목록"].map((text, index) => (
          <ListItem button key={text} onClick={buylist}>
            <ListItemIcon>
              {index === 0 ? <CreditScoreIcon /> : <></>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["로그아웃"].map((text, index) => (
          <ListItem button key={text} onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
