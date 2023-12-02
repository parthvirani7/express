const express = require("express");
const { bikeController } = require("../controller");
const routes = express.Router();

routes.get("/get", bikeController.getbike);

module.exports = routes;