const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  groupType: {
    type: String,
    required: true
  },
  learnMoreLink: {
    type: String,
    required: false
  }
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
