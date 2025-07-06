const Room = require("../models/roomModel");

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    if (!rooms) {
      return res.status(500).json({ success: false, message: "No rooms found" });
    }
    res.status(200).json({
      code: 200,
      message: "Success",
      status: true,
      data: rooms
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms', error });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const { title, maxGuest, roomSize, Amenities } = req.body;

    if (!title || !maxGuest || !roomSize || !Amenities || !Array.isArray(Amenities)) {
      return res.status(400).json({ message: 'Please provide all required fields and amenities should be an array.' });
    }

    const newRoom = new Room({
      title,
      maxGuest,
      roomSize,
      Amenities
    });

    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating room', error });
  }
};
