import express from "express";
import pick from "lodash.pick";

const app = express();

// Routes
app.get("/*", (req, res) => {
  console.log("received req");
  const x = pick(req, ["baseUrl", "hostname", "originalUrl"]);
  console.log(x);
  res.send(`Request received: ${JSON.stringify(x)}`);
});

app.set("port", process.env.port || 5000);
console.log("initializing");
app.listen(app.get("port"), () => {
  console.log(`Express listening on ${app.get("port")}`);
});
