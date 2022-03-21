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

import Side from "../../components/menu/side_admin";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useState, useEffect } from "react";
// card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// icon
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BrushIcon from "@mui/icons-material/Brush";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { deepPurple } from "@mui/material/colors";

import DonutChart_place from "../../components/chart/DonutChart_place";
import DonutChart_type from "../../components/chart/DonutChart_type";

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

  for (var i = 0; i < shop.length; i++) {
    if (shop[i].shop_region === "성북구") {
      Seongbuk++;
    }
  }

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
        <DonutChart_place />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>영등포구</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Yeongdeungpo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar src="../../img/Yeongdeungpo-gu.png"></Avatar>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    pt: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowDownwardIcon color="error" />
                  <Typography
                    color="error"
                    sx={{
                      mr: 1,
                    }}
                    variant="body2"
                  >
                    12%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>종로구</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Jongno}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar src="../../img/Jongno.jpg"></Avatar>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    pt: 2,
                  }}
                >
                  <ArrowUpwardIcon color="success" />
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 1,
                    }}
                  >
                    16%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>성북구</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Seongbuk}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar src="../../img/sb.jpg"></Avatar>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 1,
                    }}
                  >
                    0%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 업종 */}
        <br />
        <Typography variant="h5" component="div">
          <p>업종 별 입점 분석</p>
        </Typography>
        <DonutChart_type />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>음식점</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Restaurant}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <FoodBankIcon />
                    </Avatar>{" "}
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    pt: 2,
                  }}
                >
                  <ArrowUpwardIcon color="success" />
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 1,
                    }}
                  >
                    25%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>한복점</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Hanbok}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <CheckroomIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 1,
                    }}
                  >
                    0%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>공방</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Craftshop}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <BrushIcon />
                    </Avatar>{" "}
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    pt: 2,
                  }}
                >
                  <ArrowUpwardIcon color="success" />
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 1,
                    }}
                  >
                    12%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <p>기타</p>
                    </Typography>
                    <Typography color="textPrimary" variant="h4">
                      {Guitar}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      <MoreHorizIcon />
                    </Avatar>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 1,
                    }}
                  >
                    0%
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                    Since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br />
      </Main>
    </Box>
  );
}
