const express = require("express");
const routes = express.Router();
const carRoutes = require("./car.route");

routes.use("/car", carRoutes);

module.exports = routes;