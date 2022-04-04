import * as React from "react";
import { useState, useEffect } from "react";

import { styled, useTheme, alpha } from "@mui/material/styles";
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
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Stack from "@mui/material/Stack";

import { Grid } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import Side from "../../../components/menu/side";

import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";

import axios from "axios";

import Pagination from "../../../components/List/Pagination";

const drawerWidth = 240;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
  //console.log(window.location.href);

  const place = window.location.href;
  //console.log(place);
  const arr = place.split("/");
  // console.log(arr[4]);

  var api_location;
  if (arr[4] === "seongbuck") {
    api_location = "성북구";
  }
  if (arr[4] === "yeongdeungpo") {
    api_location = "영등포구";
  }
  if (arr[4] === "jongno") {
    api_location = "종로구";
  }

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  // 배포
  const webcam = (id, e) => {
    e.preventDefault();
    window.open(
      "/webcam/" + id,
      "",
      "width=600, height=800, toolbar=no, menubar=no, resizable=yes"
    );
  };

  const detail_shop = (shop_id, item_id, e) => {
    e.preventDefault();
    window.open(
      "/detail_item/" + shop_id + "/" + item_id,
      "",
      "width=600, height=800, toolbar=no, menubar=no, resizable=yes"
    );
  };

  const [item, setItem] = useState([]);
  function searchitem() {
    const url =
      process.env.REACT_APP_API_URL + "/api/item/craftshop/" + api_location;
    axios
      .get(url)
      .then(function (response) {
        //console.log(response.data);
        setItem(response.data);
        setSearchResults(response.data);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchitem();
  }, []);

  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = item.filter((data) =>
      data.item_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const handlePageChange = (page) => {
    setPage(page);
    // console.log(page);
  };

  https: return (
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
        <Paper variant="outlined" square>
          <Container maxWidth="sx">
            <Typography variant="h4" color="common.white">
              <Link color="common.black" underline="none">
                <p>
                  <span className="main_logo">LI.CO.</span> IN{" "}
                  {arr[4] === "seongbuck" ? "성북" : <></>}
                  {arr[4] === "yeongdeungpo" ? "영등포" : <></>}
                  {arr[4] === "jongno" ? "종로" : <></>}
                </p>
              </Link>
            </Typography>
            {/* <Typography variant="h6" color="common.white">
              <Link color="common.black" underline="none">
                <p>
                  <span className="main_logo">LI.CO.</span> 음식점
                </p>
              </Link>
            </Typography> */}

            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Typography variant="h8" color="common.white">
                  <Link color="common.black" underline="none">
                    <p>
                      <span className="main_logo">LI.CO.</span> 공방
                    </p>
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  sx={{ fontSize: 13 }}
                  //align="right"
                  color="#B2B2B2"
                  underline="none"
                >
                  <p>
                    리코마켓은 입점한 브랜드의 사장님께서 직접 등록하는
                    가게입니다.
                    <br />
                    브랜드를 가장 잘 이해하고 있는 사장님께서 제안하는 브랜드의
                    특징을 쉽게 확인할 수 있습니다. <br />
                    방송을 통해 사장님와 직접 소통도 가능합니다.
                  </p>
                </Typography>
              </Grid>
            </Grid>
            <div align="right">
              <Input
                type="text"
                placeholder="상품 검색"
                value={searchTerm}
                onChange={handleChange}
              />
              <SearchIcon />
            </div>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2}>
              {searchResults.slice(offset, offset + limit).map((items) => (
                <Grid item xs={3}>
                  <Container fixed>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={items.item_img}
                    />
                    <Typography
                      sx={{ fontSize: 13 }}
                      align="right"
                      color="#B2B2B2"
                      underline="none"
                    >
                      <p>{items.shop_address}</p>
                    </Typography>

                    <Stack direction="row" spacing={2}>
                      <Avatar
                        src={items.user_img}
                        sx={{ width: 24, height: 24, bgcolor: deepPurple[500] }}
                      ></Avatar>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="#202121"
                        gutterBottom
                      >
                        <Link color="common.black" underline="none">
                          {items.shop_name}
                        </Link>
                      </Typography>
                    </Stack>

                    <Divider light />
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="#202121"
                      underline="none"
                    >
                      <p>{items.item_name}</p>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#B2B2B2"
                      underline="none"
                    >
                      <p>{items.item_content}</p>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 24 }}
                      color="#A267E7"
                      underline="none"
                    >
                      <p>{items.item_price} 원</p>
                    </Typography>
                    {login === false ? (
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Button
                            onClick={(e) => {
                              detail_shop(items.shop_id, items.item_id, e);
                            }}
                            fullWidth
                            color="secondary"
                            variant="outlined"
                          >
                            <p>상품 구매하기</p>
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            disabled
                            fullWidth
                            sx={{
                              backgroundColor: "#A267E7",
                            }}
                            variant="contained"
                            onClick={(e) => {
                              webcam(items.user_id, e);
                            }}
                          >
                            <p>로그인 후 소통해보세요.</p>
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Button
                            onClick={(e) => {
                              detail_shop(items.shop_id, items.item_id, e);
                            }}
                            fullWidth
                            color="secondary"
                            variant="outlined"
                          >
                            <p>상품 구매하기</p>
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            sx={{
                              backgroundColor: "#A267E7",
                            }}
                            variant="contained"
                            onClick={(e) => {
                              webcam(items.user_id, e);
                            }}
                          >
                            <p>방송보기</p>
                          </Button>
                        </Grid>
                      </Grid>
                    )}
                  </Container>
                  <br />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Paper>
        <Pagination
          total={searchResults.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Main>
    </Box>
  );
}
