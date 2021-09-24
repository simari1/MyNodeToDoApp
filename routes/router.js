const express = require("express");

const router = express.Router();

const logger = require("../lib/log/logger").application;

router.get("/", (req, res) => {
  res.render("./home-guest.ejs");
});

module.exports = router;
