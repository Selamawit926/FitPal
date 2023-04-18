const mongoose = require("mongoose");

const schema = mongoose.Schema;

const foodSchema = new schema(
  {
    __v: { type: Number, select: false},
    name: {
      type: String,
      required: true,
      unique: true 
    },
    image: {
      type: String,
      required: false,
    },
    calories: {
      type: String,
      required: true,
    },
  
  },
);

module.exports = mongoose.model("food", foodSchema);
