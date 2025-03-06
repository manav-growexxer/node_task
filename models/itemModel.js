const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name can not be empty"],
  },
  price: {
    type: Number,
    required: [true, "Price can not be empty"],
    default: 100,
  },
  category: {
    type: String,
    required: [true, "Category can not be empty"],
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
