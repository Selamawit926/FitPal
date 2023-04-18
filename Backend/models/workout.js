const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    __v: { type: Number, select: false},
    name:{
        type:String,
        required:true
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
);


module.exports = mongoose.model("workout", workoutSchema);