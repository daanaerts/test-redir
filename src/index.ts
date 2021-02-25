import express from "express";
import pick from "lodash.pick";

const app = express();

// Routes
app.get("/redir", (req, res) => {
  res.redirect(301, "http://test.conclusion.greenberry.dev");
});

app.get("/*", (req, res) => {
  const x = pick(req, ["baseUrl", "hostname", "originalUrl"]);
  res.send(`Request received: ${JSON.stringify({ ...x, x: "version2" })}`);
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Express listening on ${app.get("port")}`);
});
