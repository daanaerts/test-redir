"use strict";

// eslint-disable-next-line import/no-unresolved
const express = require("express");
const pick = require("lodash.pick");
const app = express();

// Routes
app.get("/*", (req, res) => {
  console.log("received req");
  const x = pick(req, ["baseUrl", "hostname", "originalUrl"]);
  console.log(x);
  res.send(`Request received: ${JSON.stringify(x)}`);
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send("Internal Serverless Error");
});

app.set("port", 80);

app.listen(app.get("port"), () => {
  console.log(`listening on ${app.get("port")}`);
});

module.exports = app;
