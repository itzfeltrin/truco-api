const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  played: {
    type: Number,
    default: 0,
    required: true,
  },
  wins: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Team", TeamSchema);
