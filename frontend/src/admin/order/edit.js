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
    document.location.href = "/admin/order";
  };
  const session = JSON.parse(window.sessionStorage.getItem("data"));
  const session_edit = JSON.parse(window.sessionStorage.getItem("admin_order"));
  // console.log(session_edit);

  const [date, setdate] = useState(session_edit.order_date);

  const [name, setName] = useState(session_edit.order_item_name);

  const [price, setprice] = useState(session_edit.order_price);
  const [stock, setstock] = useState(session_edit.order_stock);
  const [state, setstate] = useState(session_edit.order_state);

  // 주문 상태
  const onStateHandler = (event) => {
    setstate(event.currentTarget.value);
  };

  // 주문 날짜
  const onDateHandler = (event) => {
    setdate(event.currentTarget.value);
  };

  // 주문 수량
  const onStockHandler = (event) => {
    setstock(event.currentTarget.value);
  };

  // 주문 가격
  const onPriceHandler = (event) => {
    setprice(event.currentTarget.value);
  };

  // 주문 상품명
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var user = {
      order_name: data.get("Name"),
      order_date: data.get("date"),
      order_price: data.get("price"),
      order_stock: data.get("stock"),
      order_state: data.get("state"),
      order_shop_id: session_edit.order_shop_id,
      order_shop_name: session_edit.order_shop_name,
      order_user_id: session_edit.order_user_id,
      order_id: session_edit.order_id,
    };
    // console.log(user);
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/api/item/" + session_edit.item_id,
        user
      )
      .then((res) => {
        // console.log(res.data);
        alert("주문 데이터가 수정 되었습니다.");
        document.location.href = "/admin/order";
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

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <br />
                <br />

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="주문 날짜"
                      autoComplete="given-name"
                      name="date"
                      required
                      fullWidth
                      id="date"
                      autoFocus
                      value={date}
                      onChange={onDateHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="주문 상품명"
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
                      label="총 주문 가격"
                      required
                      fullWidth
                      name="price"
                      id="price"
                      value={price}
                      onChange={onPriceHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="총 주문 수량"
                      required
                      fullWidth
                      name="stock"
                      id="stock"
                      value={stock}
                      onChange={onStockHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="주문 상태"
                      required
                      fullWidth
                      name="state"
                      id="state"
                      value={state}
                      onChange={onStateHandler}
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
