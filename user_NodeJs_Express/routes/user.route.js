const express = require("express");
const { userController } = require("../controller");
const routes = express.Router();

routes.get("/get", userController.getUser);

module.exports = routes;