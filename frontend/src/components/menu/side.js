import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// 사이드바
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Link from "@mui/material/Link";

// 사이드바 아이콘
import ListSubheader from "@mui/material/ListSubheader";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

export default function Side() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logout = () => {
    document.location.href = "/";
  };

  const mypage = () => {
    document.location.href = "/mypage";
  };

  const localcategory = () => {
    document.location.href = "/local";
  };

  const businesscategory = () => {
    document.location.href = "/businesstype";
  };
  function webcam() {
    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }

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
              <ListItemText primary="성북구" onClick={localcategory} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="영등포구" onClick={localcategory} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="종로구" onClick={localcategory} />
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
              <ListItemText primary="음식점" onClick={businesscategory} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CheckroomIcon />
              </ListItemIcon>
              <ListItemText primary="한복" onClick={businesscategory} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BrushIcon />
              </ListItemIcon>
              <ListItemText primary="공방" onClick={businesscategory} />
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
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddBusinessIcon />
              </ListItemIcon>
              <ListItemText primary="등록 및 수정" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="상품 등록" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="상품 수정" />
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
        {["장바구니", "주문 목록"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <ShoppingBagIcon /> : <></>}
              {index === 1 ? <CreditScoreIcon /> : <></>}
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
