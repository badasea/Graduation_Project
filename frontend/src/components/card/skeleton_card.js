import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Skeleton from "@mui/material/Skeleton";

function Skeleton_Card() {


  return (
    <div>
      <Container fixed>
        <div>
          <Skeleton variant="rectangular" width={"100%"} height={250} />
          <br />
          <Skeleton variant="rectangular" width={"100%"} height={50} />
          <br />
          <Skeleton variant="rectangular" width={"50%"} height={50} />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <br />
            <Skeleton variant="rectangular" width={"100%"} height={50} />
          </Grid>
          <Grid item xs={6}>
            <br />
            <Skeleton variant="rectangular" width={"100%"} height={50} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Skeleton_Card;
