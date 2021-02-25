"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lodash_pick_1 = __importDefault(require("lodash.pick"));
const app = express_1.default();
// Routes
app.get("/*", (req, res) => {
    console.log("received req");
    const x = lodash_pick_1.default(req, ["baseUrl", "hostname", "originalUrl"]);
    console.log(x);
    res.send(`Request received: ${JSON.stringify(x)}`);
});
app.set("port", process.env.port || 5000);
console.log("initializing");
app.listen(app.get("port"), () => {
    console.log(`Express listening on ${app.get("port")}`);
});
