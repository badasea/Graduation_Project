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
import NativeSelect from "@mui/material/NativeSelect";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Input } from "@mui/material";
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

  const home = () => {
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

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  //console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  const [shop_name, setShop_name] = useState("");
  const [shop_address, setShop_address] = useState("");
  const [shop_detail_address, setShop_detail_address] = useState("");

  const [shop_phone, setShop_phone] = useState("");
  const [shop_content, setShop_content] = useState("");

  var [shop_img, setshop_img] = useState();
  const [shop_registeration_number, setRegisteration_number] = useState("");
  const [shop_business_type, setShop_business_type] = useState("");
  const [shop_region, setShop_region] = useState("");
  //const [fileImage, setFileImage] = useState("");

  // 가게 업종
  const onShop_business_typeHandler = (event) => {
    setShop_business_type(event.currentTarget.value);
  };

  // 가게 설명
  const onShop_contentHandler = (event) => {
    setShop_content(event.currentTarget.value);
  };

  // 가게 이름
  const onShop_nameHandler = (event) => {
    setShop_name(event.currentTarget.value);
  };

  // 가게 시장 위치
  const onShop_addressHandler = (event) => {
    setShop_address(event.currentTarget.value);
  };

  // 가게 상세 주소
  const onShop_detail_addressHandler = (event) => {
    setShop_detail_address(event.currentTarget.value);
  };

  // 가게 지역구
  const onShop_regionHandler = (event) => {
    setShop_region(event.currentTarget.value);
  };

  // 가게 전화번호
  const onShop_phoneHandler = (event) => {
    setShop_phone(event.currentTarget.value);
  };

  // 가게 상표 이미지
  // const onShop_imageHandler = (event) => {
  //   setShop_image(event.currentTarget.files[0]);
  // };

  // 사업자 번호
  const onRegisteration_numberHandler = (event) => {
    setRegisteration_number(event.currentTarget.value);
  };

  var [pre_img, setPreviewImg] = useState("");
  const onimgHandler = (event) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.currentTarget.files[0]);
    fileReader.onload = function (e) {
      setPreviewImg(e.target.result);
    };
  };

  const onClickRegister = async () => {
    let shop = {
      shop_name: shop_name,
      shop_address: shop_address,
      shop_detail_address: shop_detail_address,
      shop_phone: shop_phone,
      shop_registration_num: shop_registeration_number,
      shop_business_type: shop_business_type,
      shop_region: shop_region,
      user_id: session.data.user_id,
      user_type: "seller",
      shop_image: pre_img,
      shop_content: shop_content,
    };
    // console.log(shop);

    await axios
      .post(process.env.REACT_APP_API_URL + "/api/shop/", shop, {
        // headers: {
        //   "Content-type": "multipart/form-data; charset=utf-8",
        // },
      })
      .then((res) => {
        //console.log(res.data);
        //document.location.href = "/check";
      })
      .catch();
    await axios
      .put(
        process.env.REACT_APP_API_URL +
          "/api/user/shop/" +
          session.data.user_id,
        shop,
        {
          // headers: {
          //   "Content-type": "multipart/form-data; charset=utf-8",
          // },
        }
      )
      .then((res) => {
        //console.log(res.data);
        const session_type = "seller";
        window.sessionStorage.setItem("type", JSON.stringify(session_type));
        document.location.href = "/check";
      })
      .catch();
  };

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
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              <p>가게 등록하기</p>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    지역구
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <NativeSelect
                    defaultValue={10}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                    fullWidth
                    value={shop_region}
                    onChange={onShop_regionHandler}
                  >
                    <option value={10}>지역을 선택해주세요</option>
                    <option value={"성북구"}>성북구</option>
                    <option value={"영등포구"}>영등포구</option>
                    <option value={"종로구"}>종로구</option>
                  </NativeSelect>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    업종
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  {" "}
                  <NativeSelect
                    defaultValue={10}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                    fullWidth
                    value={shop_business_type}
                    onChange={onShop_business_typeHandler}
                  >
                    <option value={10}>업종을 선택해주세요</option>
                    <option value={"음식점"}>음식점</option>
                    <option value={"한복점"}>한복점</option>
                    <option value={"공방"}>공방</option>
                    <option value={"기타"}>기타</option>
                  </NativeSelect>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가게명
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <Input
                    value={shop_name}
                    onChange={onShop_nameHandler}
                    fullWidth
                    placeholder="가게명"
                  ></Input>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    사업자 번호
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <Input
                    value={shop_registeration_number}
                    onChange={onRegisteration_numberHandler}
                    fullWidth
                    placeholder="사업자 번호"
                  ></Input>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가게 위치
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <Input
                    value={shop_address}
                    onChange={onShop_addressHandler}
                    fullWidth
                    placeholder="예) 영등포시장"
                  ></Input>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가게 상세 주소
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <Input
                    value={shop_detail_address}
                    onChange={onShop_detail_addressHandler}
                    fullWidth
                    placeholder="예)서울특별시 성북구 정릉동 서경로124"
                  ></Input>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가게 번호
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <Input
                    value={shop_phone}
                    onChange={onShop_phoneHandler}
                    fullWidth
                    placeholder="-빼고 입력해주세요"
                  ></Input>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가게 설명
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <Input
                    value={shop_content}
                    onChange={onShop_contentHandler}
                    fullWidth
                    placeholder="가게설명"
                  ></Input>
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography
                  // color="#B2B2B2"
                  sx={{ fontSize: 18 }}
                  align="left"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가게 이미지
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="#B2B2B2"
                  sx={{ fontSize: 14 }}
                  align="right"
                  underline="none"
                >
                  <input
                    accept="image/*"
                    type="file"
                    value={shop_img}
                    onChange={onimgHandler}
                  />
                </Typography>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "#A267E7",
                  }}
                  variant="contained"
                  onClick={onClickRegister}
                >
                  <p>등록 하기</p>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={home}
                  fullWidth
                  color="secondary"
                  variant="outlined"
                >
                  <p>취소 하기</p>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Main>
    </Box>
  );
}
