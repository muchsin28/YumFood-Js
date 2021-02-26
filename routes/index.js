const Router = require("express").Router();
const vendorRouter = require("./vendorRouter");
const itemRouter = require("./itemRouter");
const orderRouter = require("./orderRouter");

Router.get("/", (req, res) => {
  res.status(200).json({ status: "Connected to YummFood API " });
});

Router.use("/vendors", vendorRouter);
Router.use("/items", itemRouter);
Router.use("/orders", orderRouter);

module.exports = Router;
