const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.get("/", (req, res) => {
  console.log("Hello from express");
  res.status = 200;
  res.json({ message: "Server created with Express.js" });
});

module.exports = app;
