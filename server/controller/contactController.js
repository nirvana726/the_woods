const Contact = require("../models/contactModel");

// Get all contact messages
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      return res.status(404).json({ success: false, message: "No contacts found" });
    }
    res.status(200).json({
      code: 200,
      message: "Success",
      status: true,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please provide name, email, and message." });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      message
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Error creating contact message", error });
  }
};
