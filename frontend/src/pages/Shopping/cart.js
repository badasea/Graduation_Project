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

//
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";
import axios from "axios";
import { useState, useEffect } from "react";
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

// 제거 예정
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("광어", "바다네생선가게", 10000, 10000, 1),
  createData("도미", "바다네생선가게", 20000, 40000, 2),
  createData("한돈 앞다리살", "프라임유통", 24000, 24000, 1),
];
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

  //console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }
  //let total_price = 0;

  const [order, setOrder] = useState([]);
  const [total_price, setTotal_price] = useState([]);
  function searchorder() {
    const url =
      process.env.REACT_APP_API_URL + "/api/order/find/" + session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        setOrder(response.data);
        var price = 0;
        for (var i = 0; i < response.data.length; i++) {
          price =
            price +
            parseInt(
              response.data[i].order_price * response.data[i].order_stock
            );
        }
        setTotal_price(price);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchorder();
  }, []);
  // console.log(order);

  const item_remove = (id) => {
    //console.log(item[index].itemId)
    axios
      .delete(process.env.REACT_APP_API_URL + "/api/order/" + id, {})
      .then((res) => {
        document.location.href = "/cart";
      })
      .catch();
  };

  var formatedMysqlString = new Date(
    new Date(new Date(new Date()).toISOString()).getTime() -
      new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const buy = () => {
    let data = [];
    for (var i = 0; i < order.length; i++) {
      data[i] = {
        order_date: formatedMysqlString,
        order_state: "buy_ok",
        order_item_name: order[i].order_item_name,
        order_price: order[i].order_price,
        order_shop_name: order[i].order_shop_name,
        order_stock: order[i].order_stock,
        order_shop_id: order[i].order_shop_id,
        order_user_id: session.data.user_id,
      };
    }
    // console.log(data);
    axios
      .post(
        process.env.REACT_APP_API_URL +
          "/api/order/cartok/" +
          session.data.user_id,
        data,
        {
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        }
      )
      .then((res) => {
        //console.log(res.data)
        alert("해당 상품이 결재되었습니다.");
        document.location.href = "/buylist";
      })
      .catch();
  };

  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let dateString = year + "" + month + "" + day;

  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);
  let seconds = ("0" + today.getSeconds()).slice(-2);

  let timeString = hours + ":" + minutes + ":" + seconds;

  //console.log(dateString + " " + timeString);

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
        <Typography sx={{ fontSize: 18 }} color="#202121" underline="none">
          <p>
            장바구니 <span className="main_logo">{order.length} / 100</span>
          </p>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    상품명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    가게명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    판매가
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    수량
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    주문금액
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    삭제
                  </Link>{" "}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((orders) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <p>{orders.order_item_name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{orders.order_shop_name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{orders.order_price}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{orders.order_stock}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{orders.order_price * orders.order_stock}</p>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        backgroundColor: "#F00",
                      }}
                      variant="contained"
                      onClick={(e) => {
                        item_remove(orders.order_id, e);
                      }}
                    >
                      x
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Typography sx={{ fontSize: 24 }} align="left" underline="none">
          <p>총 주문 금액</p>
        </Typography>
        <Divider light />
        <Typography sx={{ fontSize: 18 }} align="right" underline="none">
          <p>
            <span className="main_logo">{total_price}</span> 원
          </p>
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="#202121" underline="none">
          <p>- 리코마켓은 전 상품 무료 배송입니다.</p>
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="#202121" underline="none">
          <p>- 2개 이상의 브랜드를 주문하신 경우, 개별 배송됩니다.</p>
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="#202121" underline="none">
          <p>
            - 장바구니에는 최대 100개의 상품을 보관할 수 있으며, 주문당 한번에
            주문 가능한 상품수는 100개로 제한됩니다.
          </p>
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="#202121" underline="none">
          <p>
            - 구매 가능 수량이 1개로 제한된 상품은 주문 취소 시, 24시간 내
            가상계좌 재주문이 불가합니다.
          </p>
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="#202121" underline="none">
          <p>
            - 수량 제한 상품의 경우, 가상계좌를 통한 주문은 최대 2건까지만
            가능합니다.(미입금 주문 기준, 기존 주문 합산)
          </p>
        </Typography>
        <br />
        {order.length === 0 ? (
          <Box textAlign="center">
            <Button
              //fullWidth
              sx={{
                width: "50%",
                backgroundColor: "#A267E7",
              }}
              variant="contained"
              onClick={buy}
              disabled
            >
              <p>주문하기</p>
            </Button>
          </Box>
        ) : (
          <Box textAlign="center">
            <Button
              //fullWidth
              sx={{
                width: "50%",
                backgroundColor: "#A267E7",
              }}
              variant="contained"
              onClick={buy}
            >
              <p>주문하기</p>
            </Button>
          </Box>
        )}
      </Main>
    </Box>
  );
}
