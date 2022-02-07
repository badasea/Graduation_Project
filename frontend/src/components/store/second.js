import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";

export default function Second() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <Link color="common.black" underline="none">
          가게 상세 정보 입력하기
        </Link>
      </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h8" gutterBottom>
            <Link color="common.black" underline="none">
              가게 이름
            </Link>
          </Typography>
          <TextField id="Name" name="Name" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h8" gutterBottom>
            <Link color="common.black" underline="none">
              사업자 번호
            </Link>
          </Typography>
          <TextField
            id="bus_num"
            name="bus_num"
            fullWidth
            autoComplete="shipping bus_num"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h8" gutterBottom>
            <Link color="common.black" underline="none">
              시장 위치
            </Link>
          </Typography>
          <TextField
            required
            id="address"
            name="address"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h8" gutterBottom>
            <Link color="common.black" underline="none">
              가게 전화번호
            </Link>
          </Typography>
          <TextField
            required
            id="phone"
            name="phone"
            fullWidth
            autoComplete="shipping phone"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
