const express = require("express");

const app = express();

const itemsRoute = require("./routes/itemsRoute");

app.use(express.json());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

app.use("/api/v1/items", itemsRoute);

module.exports = app;
