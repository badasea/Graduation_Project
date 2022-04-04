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

//
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";

import axios from "axios";
import { Input } from "@mui/material";

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

  const edit = (item, e) => {
    var session_edit = item;
    console.log(session_edit);
    window.sessionStorage.setItem("edit", JSON.stringify(session_edit));
    document.location.href = "/edit_item";
  };

  var login;

  var img;

  const session = JSON.parse(window.sessionStorage.getItem("data"));

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

  var [item_img, setItem_img] = useState();

  var [pre_img, setPreviewImg] = useState("");
  const onimgHandler = (event) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.currentTarget.files[0]);
    fileReader.onload = function (e) {
      // console.log(e.target.result);
      setPreviewImg(e.target.result);
    };
    // setItem_img(event.currentTarget.file);

    //setItem_img(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let item_data = {
      item_stock: data.get("stock"),
      item_price: data.get("price"),
      item_name: data.get("Name"),
      item_content: data.get("content"),
      // item_img: data.get("image"),
      item_img: pre_img,
      shop_id: user_id,
    };

    // console.log(item_data);

    axios
      .post(process.env.REACT_APP_API_URL + "/api/item", item_data, {})
      .then((res) => {
        //console.log(res.data);
        document.location.href = "/manager_item";
      })
      .catch();
  };

  const item_remove = (id) => {
    //console.log(item[index].itemId)
    axios
      .delete(process.env.REACT_APP_API_URL + "/api/item/" + id, {})
      .then((res) => {
        document.location.href = "/manager_item";
      })
      .catch();
  };
  //console.log(session);

  const [item, setItem] = useState([]);
  function searchitem() {
    const url =
      process.env.REACT_APP_API_URL + "/api/item/shop/" + session.data.user_id;
    axios
      .get(url)
      .then(function (response) {
        setItem(response.data);
        setSearchResults(response.data);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchitem();
    searchuser();
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
          <p>상품 관리</p>
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="#202121" underline="none">
          <p>
            등록 상품 :<span className="main_logo"> {item.length}개</span>
          </p>
        </Typography>
        <div align="right">
          <Input
            type="text"
            placeholder="상품 찾기"
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
                    이미지
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    상품명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    상품설명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    판매가
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    재고량
                  </Link>{" "}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    수정
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
              {searchResults.map((items) => (
                <TableRow
                  key={items.item_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={items.item_img}></Avatar>
                  </TableCell>
                  <TableCell>
                    <p>{items.item_name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.item_content}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.item_price}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.item_stock}</p>
                  </TableCell>

                  <TableCell align="right">
                    <Button
                      sx={{
                        backgroundColor: "#A267E7",
                      }}
                      variant="contained"
                      onClick={(e) => {
                        edit(items, e);
                      }}
                      // onClick={openModal}
                    >
                      <Link color="common.white" underline="none">
                        수정
                      </Link>
                    </Button>
                    {/* <Modal open={modalOpen} close={closeModal}></Modal> */}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        backgroundColor: "#F00",
                      }}
                      onClick={(e) => {
                        item_remove(items.item_id, e);
                      }}
                      variant="contained"
                    >
                      <Link color="common.white" underline="none">
                        삭제
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        {/* 여기 등록 */}
        <Typography sx={{ fontSize: 28 }} color="#202121" underline="none">
          <p>상품 등록하기</p>
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="상품명"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="content"
                label="상품설명"
                name="content"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="price"
                label="가격"
                id="price"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="stock"
                label="재고"
                id="stock"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                type="file"
                required
                fullWidth
                id="image"
                name="image"
              /> */}
              <input
                accept="image/*"
                type="file"
                value={item_img}
                onChange={onimgHandler}
              />
            </Grid>
          </Grid>

          <br />
          <Box textAlign="center">
            <Button
              type="submit"
              sx={{
                width: "50%",
                backgroundColor: "#A267E7",
              }}
              variant="contained"
            >
              <p>상품 등록하기</p>
            </Button>
          </Box>
        </Box>
      </Main>
    </Box>
  );
}
