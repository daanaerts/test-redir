"use strict";

// eslint-disable-next-line import/no-unresolved
const express = require("express");
const pick = require("lodash.pick");
const app = express();
const serverless = require("serverless-http");

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
console.log(process.env);

app.set("port", process.env.port || 8080);
console.log("initializing");
app.listen(app.get("port"), () => {
  console.log(`Express listening on ${app.get("port")}`);
});
