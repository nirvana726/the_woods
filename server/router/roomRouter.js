const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Room = require("../models/roomModel");
const authMiddleware = require("../middleware/authMiddleware");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });


// ✅ Create Room
router.post("/createRoom", authMiddleware, upload.single("image"), async (req, res) => {
  try {
    const { title, maxGuest, roomSize, Amenities } = req.body;
    if (!req.file) return res.status(400).json({ message: "Image is required" });

    const newRoom = new Room({
      title,
      maxGuest,
      roomSize,
      Amenities: Amenities?.split(",").map((a) => a.trim()),
      image: req.file.filename,
    });

    await newRoom.save();
    res.status(201).json({ success: true, data: newRoom });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating room" });
  }
});

// ✅ Get All Rooms
router.get("/getAllRooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ code: 200, status: true, message: "Success", data: rooms });
  } catch (err) {
    res.status(500).json({ message: "Error fetching rooms" });
  }
});

// ✅ Delete Room with Image Cleanup
router.delete("/rooms/:id", authMiddleware, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    // Delete image file
    if (room.image) {
      const filePath = path.join(__dirname, "..", "uploads", room.image);
      fs.unlink(filePath, (err) => {
        if (err) console.warn("Image deletion failed:", err);
      });
    }

    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete room", error: err });
  }
});

module.exports = router;
