import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ShopCard() {
  function webcam() {
    window.open(
      "http://localhost:443/12",
      "",
      "toolbar=no, menubar=no, resizable=yes"
    );
  }

  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardHeader title="가게명" subheader="지역" />
      <CardMedia
        component="img"
        height="100%"
        image="/logo192.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          가게 설명 등등
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Stack spacing={4} direction="row">
            <Button href="/store" size="large" variant="contained">
              가게 입장하기
            </Button>
            <Button onClick={webcam} size="large" variant="contained">
              방송 보기
            </Button>
          </Stack>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ShopCard;
