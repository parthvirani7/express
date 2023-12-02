const express = require("express");
const routes = express.Router();
const bikeRoutes = require("./bike.route");

routes.use("/bike", bikeRoutes);

module.exports = routes;