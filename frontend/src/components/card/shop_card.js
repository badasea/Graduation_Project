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
import Link from "@mui/material/Link";

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
      <CardMedia
        component="img"
        height="100%"
        image="/logo192.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" underline="none">
            가게명
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" underline="none">
            지역 / 업종
          </Link>
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" underline="none">
            가게 설명 가게 설명 가게 설명 가게 설명
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Stack spacing={4} direction="row">
            <Button href="/store" size="small" variant="contained">
              <Link color="inherit" underline="none">
                가게 입장하기
              </Link>
            </Button>
            <Button onClick={webcam} size="small" variant="contained">
              <Link color="inherit" underline="none">
                방송 보기
              </Link>
            </Button>
          </Stack>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ShopCard;
