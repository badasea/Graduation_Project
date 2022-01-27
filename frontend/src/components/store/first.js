import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

//
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        지역 / 업종 선택하기
      </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel required id="demo-simple-select-label">
              지역 선택하기
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="지역"
            >
              <MenuItem value={10}>성북구</MenuItem>
              <MenuItem value={20}>영등포구</MenuItem>
              <MenuItem value={30}>종로구</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel required id="demo-simple-select-label">
              업종 선택하기
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="업종 선택"
            >
              <MenuItem value={10}>음식점</MenuItem>
              <MenuItem value={20}>한복</MenuItem>
              <MenuItem value={30}>공방</MenuItem>
              <MenuItem value={30}>기타</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <br />
      </Grid>
    </React.Fragment>
  );
}
