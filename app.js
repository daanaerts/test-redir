"use strict";

// eslint-disable-next-line import/no-unresolved
const express = require("express");
const pick = require("lodash.pick");
const app = express();

// Routes
app.get("/*", (req, res) => {
  const x = pick(req, ["baseUrl", "hostname", "originalUrl"]);
  res.send(`Request received: ${JSON.stringify(x)}`);
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send("Internal Serverless Error");
});

app.set("port", 80);

app.listen(() => {
  console.log("listenig");
});

module.exports = app;
