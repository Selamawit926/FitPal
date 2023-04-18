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
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user"
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
    endTime: {
      type: Date,
      required: true
    },
    completedUsers: {
      type: Number,
      required: false,
      default: 0
    }
  },
);

challengeSchema.plugin(mongoose_fuzzy_searching,{fields:['title']});
module.exports = mongoose.model("challenge", challengeSchema);
