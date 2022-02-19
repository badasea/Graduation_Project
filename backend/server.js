const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(express.static(__dirname + "/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

require("dotenv").config();

const UserRoute = require("./routes/user.routes");
const ShopRoute = require("./routes/shop.routes");
const ItemRoute = require("./routes/item.routes");
const OrderRoute = require("./routes/order.routes");
const HelpRoute = require("./routes/help.routes");

app.use("/api/user", UserRoute);
app.use("/api/shop", ShopRoute);
app.use("/api/item", ItemRoute);
app.use("/api/order", OrderRoute);
app.use("/api/help", HelpRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:` + port);
});
