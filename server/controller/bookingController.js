const Booking = require("../models/bookingmodel")

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("room");
    if (!bookings) {
      return res.status(500).json({ success: false, message: "No bookings found" });
    }
    res.status(200).json({
      code: 200,
      message: "Success",
      status: true,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("room");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { bookingStatus } = req.body;
    if (!["pending", "confirmed", "cancelled"].includes(bookingStatus)) {
      return res.status(400).json({ message: "Invalid booking status" });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { bookingStatus },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error updating booking status", error });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('room');
    res.json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
