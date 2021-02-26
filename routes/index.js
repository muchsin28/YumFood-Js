const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.status(200).json({ status: "Connected From Routes" });
});

module.exports = Router;
