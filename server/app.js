const express = require("express");
const cors = require("cors");        
const app = express();
const mongoose = require("mongoose");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })




const roomRouter = require("./router/roomRouter");
const bookingRouter = require("./router/bookingRouter");
const contactRouter = require("./router/contactRouter");
const activityRouter = require("./router/activityRouter");
const galleryRouter = require("./router/galleryRouter");
const authRouter = require("./router/authRouter");

require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "woodsCharikot-db",
  })
  .then((con) => {
    console.log(
      "Database Connection is ready..." +
        con.connection.host +
        ":" +
        con.connection.port
    );
  })
  .catch((err) => {
    console.error("Database Connection error", err);
  });

// Enable CORS before other middleware
app.use(
    
  cors({
    origin: "http://localhost:5173", // your frontend URL
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true ,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming body:", req.body);
  next();
});

app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/activities', activityRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/auth', authRouter);

app.use('/uploads', express.static('uploads'));

app.post('/api/upload', upload.single('roomImage'), function (req, res, next) {
    res.send('Uploaded Successfully');
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
