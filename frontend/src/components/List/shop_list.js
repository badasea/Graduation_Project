import * as React from "react";

import Box from "@mui/material/Box";
import "./scroll.css";

import ShopCard from "../card/shop_card";

function ShopList() {
  return (
    <div class="app">
      <Box>
        <ul class="hs full">
          <li class="item">
            <ShopCard />
          </li>
          <li class="item">
            <ShopCard />
          </li>
          <li class="item">
            <ShopCard />
          </li>
          <li class="item">
            <ShopCard />
          </li>
          <li class="item">
            <ShopCard />
          </li>
          <li class="item">
            <ShopCard />
          </li>
        </ul>
      </Box>
    </div>
  );
}

export default ShopList;
