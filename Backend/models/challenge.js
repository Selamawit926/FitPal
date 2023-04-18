const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require("custom-mongoose-fuzzy-searching");
const schema = mongoose.Schema;

const challengeSchema = new schema(
  {
    __v: { type: Number, select: false},
    
    title: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    startTime: {
      type: Date,
      required: true
    },
    endTIme: {
      type: Date,
      required: true
    }
  },
);

challengeSchema.plugin(mongoose_fuzzy_searching,{fields:['title']});
module.exports = mongoose.model("challenge", challengeSchema);
