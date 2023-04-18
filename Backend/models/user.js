const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require("custom-mongoose-fuzzy-searching");
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

userSchema.plugin(mongoose_fuzzy_searching,{fields:['name']});
module.exports = mongoose.model("user", userSchema);
