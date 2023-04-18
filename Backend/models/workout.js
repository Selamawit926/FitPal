const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require("custom-mongoose-fuzzy-searching");
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

workoutSchema.plugin(mongoose_fuzzy_searching,{fields:['name']});
module.exports = mongoose.model("workout", workoutSchema);