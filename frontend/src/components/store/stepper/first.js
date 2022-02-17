import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

//
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "@mui/material";
import { useState } from "react";
import { Input } from "@mui/material";

export default function PaymentForm() {
  const [region, setRegion] = useState();

  const onRegionHandler = (event) => {
    setRegion(event.currentTarget.value);
    const userObj = event.currentTarget.value;
    window.sessionStorage.setItem("first", JSON.stringify(userObj));
  };

  const session = JSON.parse(window.sessionStorage.getItem("first"));

  console.log(session);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <Link color="common.black" underline="none">
          지역 / 업종 선택하기
        </Link>
      </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel required id="demo-simple-select-label">
              <Link color="common.black" underline="none">
                지역 선택하기
              </Link>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="지역"
              value={region}
              onChange={onRegionHandler}
            >
              <MenuItem value={10}>
                <Link color="common.black" underline="none">
                  성북구
                </Link>
              </MenuItem>
              <MenuItem value={20}>
                <Link color="common.black" underline="none">
                  영등포구
                </Link>
              </MenuItem>
              <MenuItem value={30}>
                <Link color="common.black" underline="none">
                  종로구
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel required id="demo-simple-select-label">
              <Link color="common.black" underline="none">
                업종 선택하기
              </Link>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="업종 선택"
            >
              <MenuItem value={10}>
                <Link color="common.black" underline="none">
                  음식점
                </Link>
              </MenuItem>
              <MenuItem value={20}>
                <Link color="common.black" underline="none">
                  한복
                </Link>
              </MenuItem>
              <MenuItem value={30}>
                <Link color="common.black" underline="none">
                  공방
                </Link>
              </MenuItem>
              <MenuItem value={30}>
                <Link color="common.black" underline="none">
                  기타
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <br />
      </Grid>
    </React.Fragment>
  );
}
