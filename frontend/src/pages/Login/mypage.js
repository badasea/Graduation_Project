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

  const [choice_location, setlocation] = React.useState([]);

  const handlelocation = (event) => {
    const {
      target: { value },
    } = event;
    setlocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [choice_like, setlike] = React.useState([]);

  const handlelike = (event) => {
    const {
      target: { value },
    } = event;
    setlike(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  //console.log(session);

  const [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [like_place, setLike_place] = useState([]);
  const [like_type, setLike_type] = useState();
  const [image, setImage] = useState();

  function login_form() {
    const url =
      process.env.REACT_APP_API_URL +
      "/api/user/login/" +
      session.data.user_email;
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data[0]);
        setUser(response.data[0]);
        setName(response.data[0].user_name);
        setPassword(response.data[0].user_password);
        setAddress(response.data[0].user_address);
        setLike_place(response.data[0].user_like_place);
        setLike_type(response.data[0].user_like_type);
        setImage(response.data[0].user_img);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    login_form();
  }, []);

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
  const place = choice_location.join(",");
  const type = choice_like.join(",");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (pre_img === "") {
      pre_img = session.data.user_img;
    }
    let user = {
      user_password: data.get("password"),
      user_name: data.get("Name"),
      user_address: data.get("address"),
      user_like_place: place,
      user_like_type: type,
      user_img: pre_img,
    };
    // console.log(user);
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/api/user/" + session.data.user_id,
        user
      )
      .then((res) => {
        // console.log(res.data);
        alert("개인 정보가 수정 되었습니다.");
        document.location.href = "/mypage";
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
                <p>마이페이지</p>
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
                      label="이름"
                      autoFocus
                      value={name}
                      onChange={onNameHandler}
                    />
                  </Grid>
                  {session.data.user_sns !== "true" ? (
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={onPasswordHandler}
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={12}>
                      <TextField
                        disabled
                        required
                        fullWidth
                        name="password"
                        label="SNS 계정에서 비밀번호를 수정해주세요."
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="address"
                      label="주소"
                      id="address"
                      value={address}
                      onChange={onAddressHandler}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-checkbox-label">
                        <Link color="common.black" underline="none">
                          관심 지역
                        </Link>
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={choice_location}
                        onChange={handlelocation}
                        label="관심지역"
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {locations.map((locationed) => (
                          <MenuItem key={locationed} value={locationed}>
                            <ListItemText primary={locationed} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid> */}
                  {/* <Grid item xs={12}>
                    <Typography component="h1" variant="h6">
                      <Link color="common.black" underline="none">
                        현재 관심 지역 : {user.user_like_place}
                      </Link>
                    </Typography>
                  </Grid> */}
                  {/* <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-checkbox-label">
                        <Link color="common.black" underline="none">
                          관심 업종
                        </Link>
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={choice_like}
                        onChange={handlelike}
                        label="관심 업종"
                        //input={<OutlinedInput label="관심업종" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {likes.map((liked) => (
                          <MenuItem key={liked} value={liked}>
                            {liked} */}
                  {/* <ListItemText primary={liked} /> */}
                  {/* </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid> */}
                  {/* <Grid item xs={12}>
                    <Typography component="h1" variant="h6">
                      <Link color="common.black" underline="none">
                        현재 관심 업종 : {user.user_like_type}
                      </Link>
                    </Typography>
                  </Grid> */}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#A267E7" }}
                >
                  <p>개인 정보 수정 하기</p>
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Main>
    </Box>
  );
}
