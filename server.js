const e = require("express");
const express = require("express");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => res.redirect("/api"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT} `);
});
