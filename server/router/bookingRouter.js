const express = require("express");
const router = express.Router();

const { 
  getAllBookings, 
  createBooking, 
  getBookingById, 
  updateBookingStatus,
  deleteBooking,
  getBookings
} = require("../controller/bookingController");

// Get all bookings
router.route("/getAllBookings").get(getAllBookings);

// Create a new booking
router.route("/createBooking").post(createBooking);

// Get a booking by ID
router.route("/getBooking/:id").get(getBookingById);

// Update booking status (e.g. confirm or cancel)
router.route("/updateBooking/:id").put(updateBookingStatus);

// Delete a booking
router.route("/deleteBooking/:id").delete(deleteBooking);

router.get('/', getBookings);

module.exports = router;
