import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ItemCard from "../card/item_card";

function ItemList() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={2.4}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ItemCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ItemList;
