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

function ShopCard() {
  function webcam() {
    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }

  return (
    <div>
      <Container fixed>
        <img
          style={{ width: "100%", height: "350px" }}
          src="../img/test1.jpg"
        />
        <Typography
          sx={{ fontSize: 13 }}
          align="right"
          color="#B2B2B2"
          underline="none"
        >
          <p>프라임유통 · 정육점</p>
        </Typography>

        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 24, height: 24, bgcolor: deepPurple[500] }}
          ></Avatar>
          <Typography sx={{ fontSize: 14 }} color="#202121" gutterBottom>
            <Link color="common.black" underline="none">
              성대전통시장
            </Link>
          </Typography>
        </Stack>

        <Divider light />
        <Typography sx={{ fontSize: 18 }} color="#202121" underline="none">
          <p>한돈 앞다리살</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="#B2B2B2" underline="none">
          <p>500g</p>
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="#A267E7" underline="none">
          <p>24,000</p>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button fullWidth color="secondary" variant="outlined">
              가게 입장하기
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#A267E7",
              }}
              variant="contained"
              onClick={webcam}
            >
              방송보기
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ShopCard;
