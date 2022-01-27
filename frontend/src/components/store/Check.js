import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const payments = [
  { name: "가게 지역", detail: "성북구" },
  { name: "가게 업종", detail: "한복" },
  { name: "가게 전화번호", detail: "010-5678-1234" },
  { name: "사업자 번호", detail: "123-4567" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        입력 정보 확인하기
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            가게명
          </Typography>
          <Typography gutterBottom>사업자명</Typography>
          <Typography gutterBottom>가게 주소</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            상세 정보
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
