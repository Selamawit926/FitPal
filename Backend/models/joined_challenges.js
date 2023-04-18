const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require("custom-mongoose-fuzzy-searching");
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
  },
);

module.exports = mongoose.model("joined_challenges", joinedChallengesSchema);