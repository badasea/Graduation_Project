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
import Link from "@mui/material/Link";

function ItemCard() {
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
            상품명
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" underline="none">
            가게명 / 지역명
          </Link>
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" underline="none">
            82,000 ~ 72,000
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Stack spacing={1} direction="row">
            <Button href="/store" size="small" variant="contained">
              <Link color="inherit" underline="none">
                상품 구매하기
              </Link>
            </Button>
            <Button href="/store" size="small" variant="contained">
              <Link color="inherit" underline="none">
                가게 입장하기
              </Link>
            </Button>
          </Stack>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
