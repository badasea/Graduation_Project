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

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import axios from "axios";
import Pagination from "../../components/List/Pagination";

//
import { Container } from "@mui/material";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

import Link from "@mui/material/Link";
import { useEffect, useState } from "react";

import Side from "../../components/menu/side";
import DonutChart from "../../components/chart/order_DonutChart";
import LineChart from "../../components/chart/Line Chart";

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

//
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#A267E7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
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

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  // console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  const [user, setUser] = useState([]);
  function searchUser() {
    const url =
      process.env.REACT_APP_API_URL +
      "/api/order/owner/" +
      session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        setUser(response.data);
        setSearchResults(response.data);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = ("0" + (today.getMonth() + 1)).slice(-2); // 월

  const [monthsales, setmonthsales] = useState([]);
  function searchmonthsales() {
    const url =
      process.env.REACT_APP_API_URL +
      "/api/order/chart2/" +
      session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].label === year + "-" + month) {
            setmonthsales(response.data[i]);
          }
        }
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  const [hit, sethit] = useState([]);
  function searchhit() {
    const url =
      process.env.REACT_APP_API_URL + "/api/order/hit/" + session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        sethit(response.data[0]);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchUser();
  }, []);

  useEffect(() => {
    searchmonthsales();
  }, []);

  useEffect(() => {
    searchhit();
  }, []);

  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = user.filter((data) =>
      data.order_item_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const handlePageChange = (page) => {
    setPage(page);
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
        <Typography sx={{ fontSize: 32 }} color="#202121" underline="none">
          <p>매출</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} align="left">
            <Container fixed>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Typography
                  textAlign={"center"}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <Link color="common.black" underline="none">
                    최근 한달 HIT 상품
                  </Link>
                </Typography>
                {hit.label !== null ? (
                  <Typography
                    textAlign={"center"}
                    sx={{ fontSize: 24 }}
                    color="#A267E7"
                    underline="none"
                  >
                    <p>{hit.label}</p>
                  </Typography>
                ) : (
                  <Typography
                    textAlign={"center"}
                    sx={{ fontSize: 24 }}
                    color="#A267E7"
                    underline="none"
                  >
                    <p>이번달 판매 물품이 없습니다.</p>
                  </Typography>
                )}
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={12} align="center">
            {" "}
            <Container fixed>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Typography
                  textAlign={"center"}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <Link color="common.black" underline="none">
                    이번달 매출
                  </Link>
                </Typography>
                {monthsales.y > 0 ? (
                  <Typography
                    sx={{ fontSize: 24 }}
                    color="#A267E7"
                    underline="none"
                  >
                    <p>총 {monthsales.y}원 달성</p>
                  </Typography>
                ) : (
                  <Typography
                    sx={{ fontSize: 24 }}
                    color="#A267E7"
                    underline="none"
                  >
                    <p>이번달 판매 물품이 없습니다.</p>
                  </Typography>
                )}
              </Paper>
            </Container>
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DonutChart />
          </Grid>
          <Grid item xs={12} align="right">
            <p>(상품 판매 비율)</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LineChart />
          </Grid>
          <Grid item xs={12} align="right">
            <p>단위: 원(월 매출)</p>
          </Grid>
        </Grid>
        <br />

        <Typography sx={{ fontSize: 32 }} color="#202121" underline="none">
          <p>주문 목록</p>
        </Typography>
        <div align="right">
          <Input
            type="text"
            placeholder="주문 검색"
            value={searchTerm}
            onChange={handleChange}
          />
          <SearchIcon />
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    상품명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    주문자명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    결재금액
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    주문량
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    주문날짜
                  </Link>{" "}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.slice(offset, offset + limit).map((items) => (
                <TableRow
                  key={items.order_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <p>{items.order_item_name}</p>
                  </TableCell>
                  <TableCell>
                    <p>{items.user_name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.order_price}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.order_stock}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.order_date}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          total={searchResults.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        <br />
      </Main>
    </Box>
  );
}
