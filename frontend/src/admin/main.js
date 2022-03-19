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

import Link from "@mui/material/Link";

import Side from "../components/menu/side_admin";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
// card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// icon
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BrushIcon from "@mui/icons-material/Brush";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { deepPurple } from "@mui/material/colors";

import { Chart, registerables } from "chart.js";

import DonutChart from "../components/chart/DonutChart";
Chart.register(...registerables);

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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

  const [shop, setshop] = useState([]);

  function searchshop() {
    const url = process.env.REACT_APP_API_URL + "/api/shop";
    axios
      .get(url)
      .then(function (response) {
        setshop(response.data);
      })
      .catch(function (error) {
        //console.log("실패");
      });
  }

  useEffect(() => {
    searchshop();
  }, []);

  var Seongbuk = 0;
  var Jongno = 0;
  var Yeongdeungpo = 0;

  var Hanbok = 0;
  var Restaurant = 0;
  var Craftshop = 0;
  var Guitar = 0;

  var donutData = [
    { name: "영등포구", value: 10 },
    { name: "성북구", value: 20 },
    { name: "종로구", value: 30 },
  ];

  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_region === "성북구") {
      Seongbuk++;
      donutData[0].value++;
    }
  }

  console.log(donutData[0].value);
  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_region === "종로구") {
      Jongno++;
    }
  }

  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_region === "영등포구") {
      Yeongdeungpo++;
    }
  }

  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_business_type === "한복점") {
      Hanbok++;
    }
  }
  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_business_type === "음식점") {
      Restaurant++;
    }
  }
  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_business_type === "공방") {
      Craftshop++;
    }
  }
  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_business_type === "기타") {
      Guitar++;
    }
  }

  const canvasDom = useRef(null);
  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["영등포구", "성북구", "종로구"],
        datasets: [
          {
            data: [30, 50, 100],
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
      type: "doughnut",
      data: {
        labels: ["음식점", "한복점", "공방", "기타"],
        datasets: [
          {
            data: [300, 50, 100, 200],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "#a267e7",
            ],
            hoverOffset: 4,
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
        style={{ background: "#fff" }}
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        open={open}
      >
        <DrawerHeader />
        <br />
        <Typography variant="h5" component="div">
          <p>지역구 별 입점 분석</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>영등포구</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar src="../../img/Yeongdeungpo-gu.png"></Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Yeongdeungpo}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>종로구</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar src="../../img/Jongno.jpg"></Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Jongno}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>성북구</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar src="../../img/sb.jpg"></Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Seongbuk}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 업종 */}
        <br />
        <Typography variant="h5" component="div">
          <p>업종 별 입점 분석</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>음식점</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <FoodBankIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Restaurant}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>한복점</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <CheckroomIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Hanbok}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>공방</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <BrushIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Craftshop}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>기타</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <MoreHorizIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="div">
                  <p>{Guitar}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 그래프 */}
        <br />
        <Typography variant="h5" component="div">
          <p>그래프</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <canvas ref={canvasDom} width="50%" height="50%"></canvas>
          </Grid>
          <Grid item xs={6}>
            <canvas ref={canvasDom2} width="50%" height="50%"></canvas>
          </Grid>
        </Grid>
        <DonutChart data={donutData} />
      </Main>
    </Box>
  );
}
