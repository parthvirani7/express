const express = require("express");
const { bookController } = require("../controller");
const routes = express.Router();

routes.get("/get", bookController.getbook);

module.exports = routes;