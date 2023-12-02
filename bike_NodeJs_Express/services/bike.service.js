const { bikeSchema } = require("../models");

const getbike = () => {
  return bikeSchema.find();
};

module.exports = { getbike };