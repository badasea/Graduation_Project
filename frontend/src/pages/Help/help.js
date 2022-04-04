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
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

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

import Link from "@mui/material/Link";

import Side from "../../components/menu/side";

import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../components/List/Pagination";

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
  createData("유저1", "문의드립니다.", "문의", "문의드립니다.", 1),
  createData("유저2", "구매오류", "오류", "구매오류", 2),
  createData("유저3", "프라임유통", "오류건 대해", "프라임유통건으로", 1),
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
  const post = () => {
    document.location.href = "/help/post";
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

  const [helps, setHelp] = useState([]);
  function searchhelp() {
    const url = process.env.REACT_APP_API_URL + "/api/help";
    axios
      .get(url)
      .then(function (response) {
        setHelp(response.data);
        setSearchResults(response.data);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchhelp();
  }, []);
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = helps.filter((data) =>
      data.help_title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const edit = (item, e) => {
    var session_edit = item;
    window.sessionStorage.setItem("help", JSON.stringify(session_edit));
    document.location.href = "/help/edit";
  };

  const detail = (item, e) => {
    var session_edit = item;
    window.sessionStorage.setItem("help", JSON.stringify(session_edit));
    document.location.href = "/help/detail";
  };

  const [limit, setLimit] = useState(8);
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
        <Typography sx={{ fontSize: 36 }} color="#202121" underline="none">
          <p>고객 센터</p>
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="#202121" underline="none">
          <p>
            문의 :<span className="main_logo"> {helps.length}건</span>
          </p>
        </Typography>
        <div align="right">
          <Input
            type="text"
            placeholder="문의 검색"
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
                    제목
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    내용
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    작성자
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    문의날짜
                  </Link>{" "}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    비고
                  </Link>{" "}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.slice(offset, offset + limit).map((items) => (
                <TableRow
                  key={items.help_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Link
                      href="/help/detail"
                      onClick={(e) => {
                        detail(items, e);
                      }}
                      color="common.black"
                      underline="none"
                    >
                      <p>{items.help_title}</p>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <p>{items.help_content}</p>
                  </TableCell>
                  <TableCell>
                    <p>{items.help_user_name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.help_date}</p>
                  </TableCell>

                  {session.data.user_id === items.help_user_id ? (
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
                    </TableCell>
                  ) : (
                    <></>
                  )}
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

        <br />
        <Box textAlign="center">
          <Button
            onClick={post}
            type="submit"
            sx={{
              width: "50%",
              backgroundColor: "#A267E7",
            }}
            variant="contained"
          >
            <p>문의 하기</p>
          </Button>
        </Box>
      </Main>
    </Box>
  );
}
