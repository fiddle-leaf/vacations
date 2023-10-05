import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";

//remix build is just a module
import * as build from "./build/index.js";

const app = express();
app.use(express.static("public"));

//app is just request handler
app.all("*", createRequestHandler({ build }));

const port = 3000;

app.listen(port, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady;
  }
  console.log(`App listening on ${port}`);
});
