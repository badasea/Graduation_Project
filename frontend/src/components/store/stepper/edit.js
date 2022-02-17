import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Second() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <Link color="common.black" underline="none">
          가게 상세 정보 수정하기
        </Link>
      </Typography>
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
      </Grid>
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
