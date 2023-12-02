const { bookSchema } = require("../models");

const getbook = () => {
  return bookSchema.find();
};

module.exports = { getbook };