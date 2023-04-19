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
    exercise_id: {
      type: String,
    },
    exercise_name: {
      type: String,
      required: true,
    },
    intensity: {
      type: String,
      
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
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
    },
    repetition:{
      type:Number,
      required:true
    }
  },
);


module.exports = mongoose.model("challenge", challengeSchema);
