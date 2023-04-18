const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    __v: { type: Number, select: false},
    name: {
      type: String,
      required: true,
     
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
    dateOfBirth: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
  },
);

module.exports = mongoose.model("user", userSchema);
