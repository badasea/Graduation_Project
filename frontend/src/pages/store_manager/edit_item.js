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

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";

// addstort
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import First from "../../components/store/first";
import Second from "../../components/store/second";
import Check from "../../components/store/Check";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Grid } from "@mui/material";
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

export default function Addstore() {
  // add
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //
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

  const main = () => {
    document.location.href = "/";
  };
  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }
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
        style={{ background: "#FFF" }}
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        open={open}
      >
        <DrawerHeader />

        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography
                textAlign={"center"}
                variant="h3"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <Link color="common.black" underline="none">
                  <p>
                    <span className="main_logo">LI.CO.</span> MARKET
                  </p>
                </Link>
              </Typography>
              <Typography component="h1" variant="h4" align="center">
                <p>상품 수정하기</p>
              </Typography>
              <Divider />
              <Grid container xs={12}>
                <Grid container xs={6}>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 18 }}
                        align="left"
                        underline="none"
                      >
                        <p>한돈 앞다리살</p>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 14 }}
                        align="left"
                        underline="none"
                      >
                        <p>설명 : 500g</p>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 14 }}
                        align="left"
                        underline="none"
                      >
                        <p>재고 : 100 개</p>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Typography
                        sx={{ fontSize: 14 }}
                        align="left"
                        underline="none"
                      >
                        <p>판매가 : 24000 원</p>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            sx={{
                              backgroundColor: "#A267E7",
                            }}
                            variant="contained"
                          >
                            <p>수정</p>
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            sx={{
                              backgroundColor: "#f00",
                            }}
                            variant="contained"
                          >
                            <p>삭제</p>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="../img/test1.jpg"
                  />
                </Grid>
              </Grid>
              <br />
            </Paper>
          </Container>
        </ThemeProvider>
      </Main>
    </Box>
  );
}
