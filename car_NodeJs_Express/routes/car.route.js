const express = require("express");
const { carController } = require("../controller");
const routes = express.Router();

routes.get("/get", carController.getcar);

module.exports = routes;