const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  maxGuest: { type: String, required: true },
  roomSize: { type: String, required: true },
  amenities: [{ type: String },],
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  slug: { type: String, required: true },
  images: [{ type: String }],   
  image: { type: String },
});

module.exports = mongoose.model("Room", roomSchema);
