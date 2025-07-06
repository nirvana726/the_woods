const mongoose = require('mongoose');
const Room = require('./models/roomModel'); // Adjust path if needed
require('dotenv').config();

const rooms = [
  {
    title: "Family Room",
    slug: "family-room",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    price: 3000,
    description: `Spacious, comfortable, and thoughtfully designed, our Family Room is perfect for families or small groups looking to relax and reconnect.\n\n- Double Bed (2 + 2 persons) – Accommodates two adults and two children comfortably\n- Attached Bathroom – Clean, private, and family-friendly\n- 24-Hour Hot Shower – Warm water available anytime for your convenience\n- LED TV – Entertainment for the whole family\n- Free WiFi – Stay connected with fast, complimentary internet\n- Beautiful View – Enjoy serene landscapes right from your room\n- Private Balcony or Garden – A personal outdoor space to unwind, perfect for morning coffee or playtime`,
    amenities: [
      "Free WiFi",
      "Mountain View",
      "Forest View",
      "Private Balcony",
      "Room Service",
      "TV",
      "Fireplace"
    ],
    maxGuest: 4,
    roomSize: "Large",
    category: "Featured",
  },
  {
    title: "King Size Room",
    slug: "king-size-room",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
    ],
    price: 2500,
    description: `Combining comfort, style, and a touch of nature, our King Size Room is ideal for couples or solo travelers.\n\n- King Size Bed\n- Attached Bathroom\n- 24-Hour Hot Shower\n- LED TV\n- Free WiFi\n- Balcony with View`,
    amenities: [
      "Free WiFi",
      "Mountain View",
      "Forest View",
      "Private Balcony",
      "Room Service",
      "TV",
      "Work Desk"
    ],
    maxGuest: 2,
    roomSize: "Large",
    category: "Featured",
  },
  {
    title: "Triple Sharing Room",
    slug: "triple-sharing-room",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    ],
    price: 2800,
    description: `A perfect blend of privacy, comfort, and nature, our Triple Sharing Room is great for friends or small families.\n\n- Three Single Beds\n- Attached Bathroom\n- 24-Hour Hot Shower\n- LED TV\n- Free WiFi\n- Balcony with View`,
    amenities: [
      "Free WiFi",
      "Mountain View",
      "Forest View",
      "Private Balcony",
      "Room Service",
      "Safe",
      "TV",
      "Fireplace",
      "Work Desk"
    ],
    maxGuest: 3,
    roomSize: "Large",
    category: "Featured",
  }
];

async function seedRooms() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Room.deleteMany({}); // Optional: clears existing rooms
    await Room.insertMany(rooms);
    console.log('Rooms seeded successfully!');
    mongoose.disconnect();
  } catch (err) {
    console.error('Seeding failed:', err);
    mongoose.disconnect();
  }
}

seedRooms();