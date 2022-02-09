import React from "react";
import "./modal.css";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            상품 수정하기
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained">
                  <Link color="common.white" underline="none">
                    수정
                  </Link>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "#A267E7",
                  }}
                  variant="contained"
                  onClick={close}
                >
                  <Link color="common.white" underline="none">
                    취소
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
