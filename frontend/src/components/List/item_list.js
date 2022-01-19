import * as React from "react";

import Box from "@mui/material/Box";
import ItemCard from "../card/item_card";
import "./scroll.css";

function ItemList() {
  return (
    <div class="app">
      <Box>
        <ul class="hs full">
          <li class="item">
            <ItemCard />
          </li>
          <li class="item">
            <ItemCard />
          </li>
          <li class="item">
            <ItemCard />
          </li>
          <li class="item">
            <ItemCard />
          </li>
          <li class="item">
            <ItemCard />
          </li>
          <li class="item">
            <ItemCard />
          </li>
        </ul>
      </Box>
    </div>
  );
}

export default ItemList;
