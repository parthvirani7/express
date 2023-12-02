const express = require("express");
const routes = express.Router();
const productRoutes = require("./product.route");

routes.use("/product", productRoutes);

module.exports = routes;