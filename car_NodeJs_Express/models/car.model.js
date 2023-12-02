const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  carBrand: {
    type: String,
    trim: true,
  },
  carModel: {
    type: String,
    trim: true,
  },
  carGearType: {
    type: String,
    trim: true,
  },
  carYear: {
    type: Number,
    trim: true,
  },
  carPrice: {
    type: Number,
    trim: true,
  },
});

const car = mongoose.model("carSchema", carSchema);

module.exports = car;