const { productSchema } = require("../models");

const getproduct = () => {
  return productSchema.find();
};

module.exports = { getproduct };