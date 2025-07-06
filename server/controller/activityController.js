const Activity = require("../models/activityModel");

// Get all activities
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    if (!activities) {
      return res.status(404).json({ success: false, message: "No activities found" });
    }
    res.status(200).json({
      code: 200,
      message: "Success",
      status: true,
      data: activities
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities", error });
  }
};

// Create a new activity
exports.createActivity = async (req, res) => {
  try {
    const { title, description, groupType, learnMoreLink } = req.body;

    if (!title || !description || !groupType) {
      return res.status(400).json({ message: "Please provide title, description, and groupType." });
    }

    const newActivity = new Activity({
      title,
      description,
      groupType,
      learnMoreLink
    });

    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ message: "Error creating activity", error });
  }
};
