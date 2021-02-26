const Router = require("express").Router();
const { vendorController } = require("../controllers");

Router.get("/", (req, res) => {
  res.status(200).json({ location: "/Vendors" });
});

module.exports = Router;
