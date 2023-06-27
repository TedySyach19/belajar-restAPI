const express = require("express");
const { route } = require("./users");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "GET products Berhasil",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "POST products Berhasil",
  });
});

module.exports = router;

// CARA PEMANGGILANYA ADA DI index.js
