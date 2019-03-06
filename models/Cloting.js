const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClothingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = Clothing = mongoose.model("clothing", ClothingSchema);
