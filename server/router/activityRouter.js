const express = require("express");
const router = express.Router();

const { getAllActivities, createActivity } = require("../controller/activityController");

router.route("/getAllActivities").get(getAllActivities);
router.route("/createActivity").post(createActivity);

module.exports = router;
