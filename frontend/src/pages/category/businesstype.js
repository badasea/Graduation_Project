import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

// 사이드바 아이콘
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
import ListSubheader from "@mui/material/ListSubheader";

// 마이페이지 수정
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Businesstype() {
  // appbar
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // sidemenu
  const [sideopen, setOpenside] = React.useState(false);
  const [side2open, setOpenside2] = React.useState(true);
  const [side3open, setOpenside3] = React.useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/main" color="inherit" underline="none">
              리코 마켓
            </Link>
          </Typography>
          <Button color="inherit" onClick={logout}>
            로그아웃
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
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
        </DrawerHeader>
        <Divider />
        {/* 지역별 시장 */}
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
                <ListItemText primary="성북구" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="영등포구" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="종로구" />
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
          <ListItemButton onClick={handleClick2} selected={selectedIndex}>
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
                <ListItemText primary="음식점" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CheckroomIcon />
                </ListItemIcon>
                <ListItemText primary="한복" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <BrushIcon />
                </ListItemIcon>
                <ListItemText primary="공방" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        {/* 가게 */}
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
                <ListItemText primary="방송 시작하기" />
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
      </Drawer>
      <Box
        style={{ background: "#FFFFFF" }}
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />
        <Typography variant="h3" color="primary">
          업종별 카테고리
        </Typography>
      </Box>
    </Box>
  );
}
