import * as React from "react";
import { useState, useEffect } from "react";
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

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";

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
  const manager_item = () => {
    document.location.href = "/manager_item";
  };

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  //   console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }
  const [user_id, setUser_id] = useState([]);
  function searchuser() {
    const url =
      process.env.REACT_APP_API_URL + "/api/shop/user/" + session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data[0]);
        setUser_id(response.data[0].shop_id);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }
  const session_edit = JSON.parse(window.sessionStorage.getItem("edit"));
  //   console.log(session_edit);

  var [item_img, setItem_img] = useState();
  var [item_name, setItem_name] = useState();
  var [item_content, setItem_content] = useState();
  var [item_price, setItem_price] = useState();
  var [item_stock, setItem_stock] = useState();

  const handleName = (event) => {
    setItem_name(event.currentTarget);
  };

  const handleContent = (event) => {
    setItem_content(event.currentTarget);
  };

  const handlePrice = (event) => {
    setItem_price(event.currentTarget);
  };
  const handleStock = (event) => {
    setItem_stock(event.currentTarget);
  };
  var [pre_img, setPreviewImg] = useState("");
  const onimgHandler = (event) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.currentTarget.files[0]);
    fileReader.onload = function (e) {
      setPreviewImg(e.target.result);
    };
  };

  const handleSubmit = () => {
    var item_data = {
      item_stock: item_stock,
      item_price: item_price,
      item_name: item_name,
      item_content: item_content,
      item_img: pre_img,
      shop_id: user_id,
    };

    console.log(item_data);

    axios
      .put(process.env.REACT_APP_API_URL + "/api/item/test", item_data, {})
      .then((res) => {
        console.log(res.data);
        //document.location.href = "/manager_item";
      })
      .catch();
  };

  useEffect(() => {
    searchuser();
  }, []);

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
        <Typography sx={{ fontSize: 36 }} color="#202121" underline="none">
          <p>상품 수정</p>
        </Typography>
        <img
          align="center"
          style={{
            display: "block",
            margin: "0px auto",
            width: "10%",
            height: "10%",
          }}
          src={session_edit.item_img}
        />

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <input
              accept="image/*"
              type="file"
              value={item_img}
              onChange={onimgHandler}
            />
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
                  상품명
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
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  value={session_edit.item_name}
                  onChange={handleName}
                  id="Name"
                />
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
                  상품설명
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
                <TextField
                  value={session_edit.item_content}
                  onChange={handleContent}
                  required
                  fullWidth
                  id="content"
                  name="content"
                />
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
                  가격
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
                <TextField
                  value={session_edit.item_price}
                  onChange={handlePrice}
                  required
                  fullWidth
                  name="price"
                  id="price"
                />
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
                  재고
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
                <TextField
                  value={session_edit.item_stock}
                  onChange={handleStock}
                  required
                  fullWidth
                  name="stock"
                  id="stock"
                />
              </Typography>
            </Grid>
          </Grid>
          <br />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#A267E7",
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              <p>상품 수정하기</p>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#A267E7",
              }}
              variant="contained"
              onClick={manager_item}
            >
              <p>취소하기</p>
            </Button>
          </Grid>
        </Grid>
        <br />
      </Main>
    </Box>
  );
}
