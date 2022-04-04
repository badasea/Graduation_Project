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

import { useState } from "react";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side_admin";

//
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

  var login;

  var img;

  const back = () => {
    document.location.href = "/admin/shop";
  };
  const session = JSON.parse(window.sessionStorage.getItem("data"));
  const session_edit = JSON.parse(window.sessionStorage.getItem("admin_shop"));
  //   console.log(session_edit);

  const [region, setregion] = useState(session_edit.shop_region);
  const [type, settype] = useState(session_edit.shop_business_type);
  const [name, setName] = useState(session_edit.shop_name);
  const [num, setnum] = useState(session_edit.shop_registration_num);
  const [address, setAddress] = useState(session_edit.shop_address);
  const [detail_address, setdetail_Address] = useState(
    session_edit.shop_detail_address
  );
  const [phone, setphone] = useState(session_edit.shop_phone);
  const [content, setcontent] = useState(session_edit.shop_content);

  // 가게 설명
  const onContentHandler = (event) => {
    setcontent(event.currentTarget.value);
  };

  // 전화번호
  const onPhoneHandler = (event) => {
    setphone(event.currentTarget.value);
  };

  // 지역구
  const onRegionHandler = (event) => {
    setregion(event.currentTarget.value);
  };

  // 가게 이름
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  // 가게 위치
  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value);
  };

  // 가게 상세 주소
  const ondetail_AddressHandler = (event) => {
    setdetail_Address(event.currentTarget.value);
  };

  // 사업자 번호
  const onNumHandler = (event) => {
    setnum(event.currentTarget.value);
  };

  // 업종
  const onTypeHandler = (event) => {
    settype(event.currentTarget.value);
  };

  const [image, setImage] = useState(session_edit.shop_image);

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
      pre_img = session_edit.shop_image;
    }
    var user = {
      shop_address: data.get("address"),
      shop_business_type: data.get("type"),
      shop_content: data.get("content"),
      shop_detail_address: data.get("detail_address"),
      shop_id: session_edit.shop_id,
      shop_image: pre_img,
      shop_name: data.get("Name"),
      shop_phone: data.get("phone"),
      shop_region: data.get("region"),
      shop_registration_num: data.get("num"),
      user_id: session_edit.user_id,
    };
    // console.log(user);
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/api/shop/" + session_edit.shop_id,
        user
      )
      .then((res) => {
        // console.log(res.data);
        alert("가게 데이터가 수정 되었습니다.");
        document.location.href = "/admin/shop";
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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/admin" color="common.black" underline="none">
              <p>
                <span className="main_logo">LI.CO.</span> MARKET ADMIN SYSTEM
              </p>
            </Link>
          </Typography>
          <div>
            <Button size="medium">
              <Link href="/" color="common.black" underline="none">
                LOG OUT
              </Link>
            </Button>
          </div>
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
                <p>데이터 수정</p>
              </Typography>
              <Avatar sx={{ width: 100, height: 100 }} src={image}></Avatar>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <input align="right" accept="image/*" type="file" />
                <br />
                <br />

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="지역구"
                      autoComplete="given-name"
                      name="region"
                      required
                      fullWidth
                      id="region"
                      autoFocus
                      value={region}
                      onChange={onRegionHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="업종"
                      autoComplete="given-name"
                      name="type"
                      required
                      fullWidth
                      id="type"
                      autoFocus
                      value={type}
                      onChange={onTypeHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="이름"
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
                      label="사업자번호"
                      autoComplete="given-name"
                      name="num"
                      required
                      fullWidth
                      id="num"
                      autoFocus
                      value={num}
                      onChange={onNumHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="시장위치"
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
                      label="가게 상세 주소"
                      required
                      fullWidth
                      name="detail_address"
                      id="detail_address"
                      value={detail_address}
                      onChange={ondetail_AddressHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="가게 전화번호"
                      required
                      fullWidth
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={onPhoneHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="가게 설명"
                      required
                      fullWidth
                      name="content"
                      id="content"
                      value={content}
                      onChange={onContentHandler}
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
                  <p>데이터 수정 하기</p>
                </Button>
              </Box>
              <Button
                onClick={back}
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
