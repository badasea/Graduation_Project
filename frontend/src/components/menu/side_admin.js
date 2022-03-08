import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// 사이드바 아이콘
import ListSubheader from "@mui/material/ListSubheader";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Side() {
  const logout = () => {
    sessionStorage.removeItem("data");

    document.location.href = "/";
  };

  const user = () => {
    document.location.href = "/admin/user";
  };
  const shop = () => {
    document.location.href = "/admin/shop";
  };
  const item = () => {
    document.location.href = "/admin/item";
  };
  const order = () => {
    document.location.href = "/admin/order";
  };
  const help = () => {
    document.location.href = "/admin/help";
  };

  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      ></List>
      <div>
        <List>
          {["장바구니"].map((text, index) => (
            <ListItem button key={text} onClick={user}>
              <ListItemIcon>
                {index === 0 ? <AccountCircleIcon color="secondary" /> : <></>}
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                User
              </Link>
            </ListItem>
          ))}
        </List>
        <List>
          {["주문 목록"].map((text, index) => (
            <ListItem button key={text} onClick={shop}>
              <ListItemIcon>
                {index === 0 ? <StoreIcon color="secondary" /> : <></>}
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                Shop
              </Link>
            </ListItem>
          ))}
        </List>
        <List>
          {["고객 센터"].map((text, index) => (
            <ListItem button key={text} onClick={item}>
              <ListItemIcon>
                {index === 0 ? <InventoryIcon color="secondary" /> : <></>}
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                Item
              </Link>
            </ListItem>
          ))}
        </List>
        <List>
          {["고객 센터"].map((text, index) => (
            <ListItem button key={text} onClick={order}>
              <ListItemIcon>
                {index === 0 ? <CreditScoreIcon color="secondary" /> : <></>}
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                Order
              </Link>
            </ListItem>
          ))}
        </List>
        <List>
          {["고객 센터"].map((text, index) => (
            <ListItem button key={text} onClick={help}>
              <ListItemIcon>
                {index === 0 ? <HelpIcon color="secondary" /> : <></>}
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                Help
              </Link>
            </ListItem>
          ))}
        </List>
        <List>
          {["로그아웃"].map((text, index) => (
            <ListItem button key={text} onClick={logout}>
              <ListItemIcon>
                <LogoutIcon color="secondary" />
              </ListItemIcon>
              <Link color="common.black" underline="none">
                <ListItemText />
                로그 아웃
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
