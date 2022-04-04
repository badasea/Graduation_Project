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

import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import Side from "../../components/menu/side_admin";
import axios from "axios";
import { useState, useEffect } from "react";
import { Input } from "@mui/material";
import { Avatar } from "@mui/material";
import Modal from "@mui/material/Modal";

import Pagination from "../../components/List/Pagination";

const drawerWidth = 240;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#A267E7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
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

  const [tableData, setTableData] = useState([]);

  const item_remove = (id) => {
    //console.log(item[index].itemId)
    axios
      .delete(process.env.REACT_APP_API_URL + "/api/user/" + id, {})
      .then((res) => {
        document.location.href = "/admin/user";
      })
      .catch();
  };

  const [user, setUser] = useState([]);
  function searchUser() {
    const url = process.env.REACT_APP_API_URL + "/api/user";
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

  useEffect(() => {
    searchUser();
  }, []);

  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = user.filter((data) =>
      data.user_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const edit = (item, e) => {
    var session_edit = item;
    // console.log(session_edit);
    window.sessionStorage.setItem("admin_user", JSON.stringify(session_edit));
    document.location.href = "/admin/user/edit";
  };

  const [modalopen, setmodalOpen] = React.useState(false);
  const modalhandleOpen = () => setmodalOpen(true);
  const modalhandleClose = () => setmodalOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let user = {
      user_email: data.get("email"),
      user_password: data.get("password"),
      user_name: data.get("Name"),
      user_address: data.get("address"),
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/user", user, {})
      .then((res) => {
        // console.log(res.data);
        if (res.data === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          alert("존재하는 이메일 계정입니다.");
        } else {
          alert("유저 생성이 완료되었습니다.");
          document.location.href = "/admin/user";
        }
      })
      .catch();
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
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link color="common.black" underline="none">
            <p>USER DATA</p>
          </Link>
        </Typography>
        <Button
          sx={{
            backgroundColor: "#A267E7",
          }}
          variant="contained"
          onClick={modalhandleOpen}
        >
          <h8>등록</h8>
        </Button>
        <Modal
          open={modalopen}
          onClose={modalhandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link color="common.black" underline="none">
                  <p>유저 생성하기</p>
                </Link>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="이름"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="이메일 주소"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="주소"
                    id="address"
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
                <p>계정 생성하기</p>
              </Button>
            </Box>
          </Box>
        </Modal>
        <div align="right">
          <Input
            type="text"
            placeholder="유저 검색"
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
                    ID
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    프로필 사진
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    이름
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    이메일
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    비밀번호
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    주소
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    유저타입
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    관심지역
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    관심업종
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    SNS 계정 여부
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
              {searchResults.slice(offset, offset + limit).map((items) => (
                <TableRow
                  key={items.user_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <p>{items.user_id}</p>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Avatar src={items.user_img}></Avatar>
                  </TableCell>
                  <TableCell>
                    <p>{items.user_name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_email}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_password}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_address}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_type}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_like_place}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_like_type}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{items.user_sns}</p>
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
                        item_remove(items.user_id, e);
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
