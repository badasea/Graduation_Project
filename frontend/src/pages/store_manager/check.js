import * as React from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";
import { Container } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    sessionStorage.removeItem("data");
    document.location.href = "/";
  };

  const mypage = () => {
    document.location.href = "/mypage";
  };

  const cart = () => {
    document.location.href = "/cart";
  };

  const buylist = () => {
    document.location.href = "/buylist";
  };
  const help = () => {
    document.location.href = "/help";
  };
  const manageritem = () => {
    document.location.href = "/manager_item";
  };
  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  //console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  function login_form() {
    const url =
      process.env.REACT_APP_API_URL + "/api/shop/user/" + session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data[0]);
        setShop_id(response.data[0].shop_id);
        setShop_name(response.data[0].shop_name);
        setShop_address(response.data[0].shop_address);
        setShop_phone(response.data[0].shop_phone);
        setShop_content(response.data[0].shop_content);
        setRegisteration_number(response.data[0].shop_registration_num);
        setShop_business_type(response.data[0].shop_business_type);
        setShop_region(response.data[0].shop_region);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    login_form();
  }, []);

  const [shop_id, setShop_id] = useState("");

  const [shop_name, setShop_name] = useState("");
  const [shop_address, setShop_address] = useState("");
  const [shop_phone, setShop_phone] = useState("");
  const [shop_content, setShop_content] = useState("");

  // const [shop_image, setShop_image] = useState("");
  const [shop_registeration_number, setRegisteration_number] = useState("");
  const [shop_business_type, setShop_business_type] = useState("");
  const [shop_region, setShop_region] = useState("");
  //const [fileImage, setFileImage] = useState("");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography
            // textAlign={"center"}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link href="/" color="common.black" underline="none">
              <p>
                <span className="main_logo">LI.CO.</span> MARKET
              </p>
            </Link>
          </Typography>
          {login === false ? (
            <div>
              <Button size="medium">
                <Link href="/signup" color="common.black" underline="none">
                  REGISTER
                </Link>
              </Button>
              <Button size="medium">
                <Link href="/login" color="common.black" underline="none">
                  LOG IN
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
              >
                {img !== undefined ? (
                  <AccountCircleIcon
                    sx={{ width: 46, height: 46 }}
                    color="secondary"
                  />
                ) : (
                  <Avatar src={session.data.user_img}></Avatar>
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={mypage}>마이페이지</MenuItem>
                <MenuItem onClick={cart}>장바구니</MenuItem>
                <MenuItem onClick={buylist}>주문 목록</MenuItem>
                <MenuItem onClick={help}>고객센터</MenuItem>
                <MenuItem onClick={logout}>로그아웃</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Side />
      </Drawer>
      <Main
        style={{ background: "#fff" }}
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        open={open}
      >
        <DrawerHeader />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>
              <CheckIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <p>입점 완료</p>
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              <Link color="common.black" underline="none">
                입력한 정보가 정상적으로 처리되었으며, 리코마켓 앱에 노출돼요.
              </Link>
            </Typography>
            <br />
            <Typography color="#B2B2B2" sx={{ fontSize: 14 }}>
              광고 시작일은 입점시 바로 등록되고, 입력된 정보는 가게 관리
              서비스를 통해 언제든지 변경할 수 있어요.{" "}
            </Typography>
            <Typography sx={{ fontSize: 24 }} align="left" underline="none">
              <p>가게 입점 정보</p>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="left"
                  underline="none"
                >
                  <p>가게명</p>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <p>{shop_name}</p>
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="left"
                  underline="none"
                >
                  <p>사업자번호</p>
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <p>{shop_registeration_number}</p>
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="left"
                  underline="none"
                >
                  <p>지역구</p>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <p>{shop_region}</p>
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="left"
                  underline="none"
                >
                  <p>시장 위치</p>
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <p>{shop_address}</p>
                </Typography>
              </Grid>
            </Grid>{" "}
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="left"
                  underline="none"
                >
                  <p>가게 업종</p>
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <p>{shop_business_type}</p>
                </Typography>
              </Grid>
            </Grid>{" "}
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="left"
                  underline="none"
                >
                  <p>가게 번호</p>
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <p>{shop_phone}</p>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box textAlign="center">
            <Button
              //fullWidth
              sx={{
                width: "50%",
                backgroundColor: "#A267E7",
              }}
              variant="contained"
              onClick={manageritem}
            >
              <p>상품 등록하기</p>
            </Button>
            <Link
              color="common.black"
              href="/"
              variant="body2"
              underline="none"
            >
              <p>{"리코마켓 메인으로"}</p>
            </Link>
          </Box>
        </Container>
      </Main>
    </Box>
  );
}
