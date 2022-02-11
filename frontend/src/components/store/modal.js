import React from "react";
import "./modal.css";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Modal = (props) => {
  const { open, close } = props;

  // const session = JSON.parse(window.sessionStorage.getItem("item"));

  const [itemName, setItemName] = useState(props.children);
  // const [itemContent, setItemContent] = useState(session.item.item_content);
  // const [itemPrice, setItemPrice] = useState(session.item.item_price);
  // const [itemStock, setItemStock] = useState(session.item.item_stock);
  // const [itemImages, setItemImages] = useState(
  //   item_data_session.item_data.storeFileName
  // );

  const onItemNameHandler = (event) => {
    setItemName(event.currentTarget.value);
  };
  // const onItemContentHandler = (event) => {
  //   setItemContent(event.currentTarget.value);
  // };
  // const onItemStockHandler = (event) => {
  //   setItemStock(event.currentTarget.value);
  // };
  // const onItemPriceHandler = (event) => {
  //   setItemPrice(event.currentTarget.value);
  // };

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
          <main>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    상품명
                  </Link>{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <input onChange={onItemNameHandler} value={itemName}></input>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    상품 설명
                  </Link>{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <input
                // onChange={onItemContentHandler}
                //value={props.children}
                ></input>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    가격
                  </Link>{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <input

                // onChange={onItemPriceHandler}

                // value={itemPrice}
                ></input>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    재고량
                  </Link>{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <input
                //onChange={onItemStockHandler}
                //value={itemStock}
                ></input>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="#202121"
                  underline="none"
                >
                  <Link color="common.black" underline="none">
                    상품 이미지
                  </Link>{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <input></input>
              </Grid>
            </Grid>
          </main>
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
