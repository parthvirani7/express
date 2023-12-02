const mongoose = require("mongoose");

const bikeSchema = mongoose.Schema({
  bikeName: {
    type: String,
    trim: true,
  },
  bikeModel: {
    type: String,
    trim: true,
  },
  bikePrice: {
    type: Number,
    trim: true,
  },
});

const bike = mongoose.model("bikeSchema", bikeSchema);

module.exports = bike;