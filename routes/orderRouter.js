const Router = require("express").Router();
const { orderController } = require("../controllers");

Router.get("/", (req, res) => {
  res.status(200).json({ location: "/Orders" });
});

module.exports = Router;
