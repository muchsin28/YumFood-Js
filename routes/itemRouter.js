const Router = require("express").Router();
const { itemController } = require("../controllers");

Router.get("/", (req, res) => {
  res.status(200).json({ location: "/Items" });
});

module.exports = Router;
