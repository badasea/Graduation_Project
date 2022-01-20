import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ItemCard() {
  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardHeader title="상품명" subheader="업종" />
      <CardMedia
        component="img"
        height="100%"
        image="/logo192.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          상품 설명 가격 등등
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Stack spacing={0.5} direction="row">
            <Button href="/store" size="large" variant="contained">
              상품 구매하기
            </Button>
            <Button href="/store" size="large" variant="contained">
              가게 입장하기
            </Button>
          </Stack>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
