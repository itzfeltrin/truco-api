const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  teamOneID: {
    type: String,
    required: true,
  },
  teamTwoID: {
    type: String,
    required: true,
  },
  teamOneScore: {
    type: Number,
    required: true,
  },
  teamTwoScore: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Game", GameSchema);
