const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  guestName: {
    type: String,
  },
  colors: {
    type: String,
  },
  colorsComment: {
    type: String,
  },
  layout: {
    type: String,
  },
  layoutComment: {
    type: String,
  },
  favoriteProject: {
    type: String,
  },
  favoriteProjectWhy: {
    type: String,
  },
  otherComment: {
    type: String,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
