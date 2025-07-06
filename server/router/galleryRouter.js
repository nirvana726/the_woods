const express = require("express");
const router = express.Router();
const multer = require("multer");
const Gallery = require("../models/galleryModel");

// multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST: Upload single image to gallery
router.post("/uploadImage", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image provided" });

    const newGallery = new Gallery({ image: req.file.path });
    await newGallery.save();

    res.status(201).json({ success: true, data: newGallery });
  } catch (err) {
    res.status(500).json({ message: "Error uploading image" });
  }
});

// GET: All gallery images
router.get("/getGallery", async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ uploadedAt: -1 });
    res.status(200).json({ success: true, data: gallery });
  } catch (err) {
    res.status(500).json({ message: "Error loading gallery" });
  }
});

module.exports = router;
