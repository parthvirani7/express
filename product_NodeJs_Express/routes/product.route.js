const express = require("express");
const { productController } = require("../controller");
const routes = express.Router();

routes.get("/get", productController.getproduct);

module.exports = routes;