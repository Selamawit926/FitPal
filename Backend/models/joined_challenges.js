const mongoose = require("mongoose");
const schema = mongoose.Schema;

const joinedChallengesSchema = new schema(
  {
    __v: { type: Number, select: false},
    
    challengeID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'challenge'
    },
    userID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user"
    },
    isActive: {
      type: Boolean,
      default: true
    },
    calories_burnt: {
      type:Number,
      required:false
    }
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("joined_challenges", joinedChallengesSchema);
