const path = require("path");
const express = require("express");
const app = express();
const port = 4000;

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
const routes = require("../routes");

app.use(express.static(staticPath));

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.use("/", routes);

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
