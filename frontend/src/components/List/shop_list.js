import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ShopCard from "../card/shop_card";

function ShopList() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={2.4}>
          <ShopCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ShopCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ShopCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ShopCard />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <ShopCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShopList;
