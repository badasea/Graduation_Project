import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Second() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        가게 상세 정보 입력하기
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="가게 이름"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="bus_num"
            name="bus_num"
            label="사업자 번호"
            fullWidth
            autoComplete="shipping bus_num"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="실제 주소"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="가게 전화번호"
            fullWidth
            autoComplete="shipping phone"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
