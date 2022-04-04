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
      .delete(process.env.REACT_APP_API_URL + "/api/item/" + id, {})
      .then((res) => {
        document.location.href = "/admin/item";
      })
      .catch();
  };

  const [user, setUser] = useState([]);
  function searchUser() {
    const url = process.env.REACT_APP_API_URL + "/api/item";
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
      data.item_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const edit = (item, e) => {
    var session_edit = item;
    // console.log(session_edit);
    window.sessionStorage.setItem("admin_item", JSON.stringify(session_edit));
    document.location.href = "/admin/item/edit";
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
            <p>ITEM DATA</p>
          </Link>
        </Typography>

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
                    상품 이미지
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell>
                  <Link color="common.white" underline="none">
                    상품명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    상품 설명
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    가격
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    재고
                  </Link>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="common.white" underline="none">
                    가게 ID
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
                  key={items.item_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <p>{items.item_id}</p>
                  </TableCell>
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
                    <p>{items.shop_id}</p>
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
