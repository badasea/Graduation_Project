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
import { Container } from "@mui/material";
import { Stack } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

import Link from "@mui/material/Link";
import { useRef, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Side from "../../components/menu/side";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
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
  createData("광어", "바다", 10000, 10000, 1),
  createData("도미", "준영", 20000, 40000, 2),
  createData("한돈 앞다리살", "성민", 24000, 24000, 1),
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

  console.log(session);

  if (session === null) {
    login = false;
  } else {
    login = true;
  }

  const canvasDom = useRef(null);
  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }, []);

  const canvasDom2 = useRef(null);
  useEffect(() => {
    const ctx = canvasDom2.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        datasets: [
          {
            label: "월별 매출",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#A267E7",
            tension: 0.1,
          },
        ],
      },
    });
  }, []);

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
          <Grid item xs={6} align="left">
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
                    이번 달 HIT 상품
                  </Link>
                </Typography>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../img/test1.jpg"
                />

                <Divider light />
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <p>한돈 앞다리살</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="#B2B2B2"
                  underline="none"
                >
                  <p>500g</p>
                </Typography>
                <Typography
                  sx={{ fontSize: 24 }}
                  color="#A267E7"
                  underline="none"
                >
                  <p>24,000원</p>
                </Typography>
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={6} align="center">
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
                <Typography
                  sx={{ fontSize: 24 }}
                  color="#A267E7"
                  underline="none"
                >
                  <p>총 24,000원 달성</p>
                </Typography>
              </Paper>
            </Container>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl sx={{ width: "20%" }}>
              <InputLabel required id="demo-simple-select-label">
                <Link color="common.black" underline="none">
                  연도 선택하기
                </Link>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={2022}>
                  <Link color="common.black" underline="none">
                    2022
                  </Link>
                </MenuItem>
                <MenuItem value={2023}>
                  <Link color="common.black" underline="none">
                    2023
                  </Link>
                </MenuItem>
                <MenuItem value={2024}>
                  <Link color="common.black" underline="none">
                    2024
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <canvas ref={canvasDom} width="50%" height="50%"></canvas>
          </Grid>
          <Grid item xs={6}>
            <canvas ref={canvasDom2} width="50%" height="50%"></canvas>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} align="right">
            <p>(상품 판매 비율)</p>
          </Grid>
          <Grid item xs={6} align="right">
            <p>단위: 십만원(월 매출)</p>
          </Grid>
        </Grid>
        <br />

        <Typography sx={{ fontSize: 32 }} color="#202121" underline="none">
          <p>주문 목록</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl sx={{ width: "20%" }}>
              <InputLabel required id="demo-simple-select-label">
                <Link color="common.black" underline="none">
                  연도 선택하기
                </Link>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={2022}>
                  <Link color="common.black" underline="none">
                    2022
                  </Link>
                </MenuItem>
                <MenuItem value={2023}>
                  <Link color="common.black" underline="none">
                    2023
                  </Link>
                </MenuItem>
                <MenuItem value={2024}>
                  <Link color="common.black" underline="none">
                    2024
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    상품명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    고객명
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
                    주문날짜
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    주문금액
                  </Link>{" "}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <p>{row.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.calories}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.fat}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.protein}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>2022. 01. 02</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{row.carbs}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Main>
    </Box>
  );
}
