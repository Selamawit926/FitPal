const mongoose = require("mongoose");

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


module.exports = mongoose.model("challenge", challengeSchema);
