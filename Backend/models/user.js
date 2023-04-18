const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
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
    description: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false
    },
    location: {
      type: String,
      required: false
    }
  },
);

module.exports = mongoose.model("user", userSchema);
