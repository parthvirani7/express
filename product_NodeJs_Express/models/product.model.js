const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    trim: true,
  },
  productId: {
    type: String,
    trim: true,
  },
  productNumber: {
    type: Number,
    trim: true,
  },
});

const product = mongoose.model("productSchema", productSchema);

module.exports = product;