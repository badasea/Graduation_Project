import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";

const payments = [
  { name: "가게 지역", detail: "영등포구" },
  { name: "가게 업종", detail: "음식점" },
  { name: "가게 전화번호", detail: "010-5678-1234" },
  { name: "사업자 번호", detail: "123-4567" },
];

export default function Review() {
  const session = JSON.parse(window.sessionStorage.getItem("data"));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <Link color="common.black" underline="none">
          입력 정보 확인하기
        </Link>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <Link color="common.black" underline="none">
              바다네 생선가게
            </Link>
          </Typography>
          <Typography gutterBottom>
            <Link color="common.black" underline="none">
              영등포시장
            </Link>
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <Link color="common.black" underline="none">
              상세 정보
            </Link>
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{ fontSize: 14 }}>
                    <Link color="common.black" underline="none">
                      {payment.name}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{ fontSize: 14 }}>
                    <Link color="common.black" underline="none">
                      {payment.detail}
                    </Link>
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
