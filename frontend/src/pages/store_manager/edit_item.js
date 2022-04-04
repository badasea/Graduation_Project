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
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState, useEffect } from "react";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";

//
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const locations = ["성북구", "영등포구", "종로구"];

const likes = ["음식점", "한복", "공방", "기타"];

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
  const session_edit = JSON.parse(window.sessionStorage.getItem("edit"));

  // console.log(session_edit);

  const [user, setUser] = useState([]);
  const [name, setName] = useState(session_edit.item_name);
  const [password, setPassword] = useState(session_edit.item_content);
  const [address, setAddress] = useState(session_edit.item_price);
  const [like_place, setLike_place] = useState(session_edit.item_stock);
  const [image, setImage] = useState(session_edit.item_img);

  // 이름
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  // 비밀번호
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // 주소
  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value);
  };

  // 스톡
  const onPlaceHandler = (event) => {
    setLike_place(event.currentTarget.value);
  };
  var [shop_img, setshop_img] = useState();

  var [pre_img, setPreviewImg] = useState("");
  const onimgHandler = (event) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.currentTarget.files[0]);
    fileReader.onload = function (e) {
      setPreviewImg(e.target.result);
      // console.log(e.target.result);
    };
  };

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (pre_img === "") {
      pre_img = session_edit.item_img;
    }
    var user = {
      item_content: data.get("password"),
      item_name: data.get("Name"),
      item_price: data.get("address"),
      item_stock: data.get("stock"),
      item_img: pre_img,
      shop_id: session_edit.shop_id,
    };
    // console.log(user);
    await axios
      .put(
        process.env.REACT_APP_API_URL + "/api/item/" + session_edit.item_id,
        user
      )
      .then((res) => {
        // console.log(res.data);
        alert("상품 정보가 수정 되었습니다.");
        document.location.href = "/manager_item";
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
        style={{ background: "#FFFFFF" }}
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        open={open}
      >
        <DrawerHeader />

        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                <p>상품 수정</p>
              </Typography>
              <Avatar sx={{ width: 100, height: 100 }} src={image}></Avatar>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <input
                  align="right"
                  accept="image/*"
                  type="file"
                  value={shop_img}
                  onChange={onimgHandler}
                />
                <br />
                <br />

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="Name"
                      required
                      fullWidth
                      id="Name"
                      autoFocus
                      value={name}
                      onChange={onNameHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={onPasswordHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="address"
                      id="address"
                      value={address}
                      onChange={onAddressHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="stock"
                      id="stock"
                      autoComplete="new-password"
                      value={like_place}
                      onChange={onPlaceHandler}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#A267E7" }}
                >
                  <p>상품 수정 하기</p>
                </Button>
              </Box>
              <Button
                onClick={manager_item}
                fullWidth
                size="large"
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#A267E7" }}
              >
                <p>취소 하기</p>
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </Main>
    </Box>
  );
}
