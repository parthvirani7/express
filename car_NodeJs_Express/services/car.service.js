const { carSchema } = require("../models");

const getcar = () => {
  return carSchema.find();
};

module.exports = { getcar };