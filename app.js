const express = require("express");
const accesslogger = require("./lib/log/accesslogger");
const systemlogger = require("./lib/log/systemlogger");

const app = express();
const port = 3000;
const router = require("./routes/router");

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use(accesslogger());
app.use("/", router);
app.use(systemlogger());

app.listen(port);
