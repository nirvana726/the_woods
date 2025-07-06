const jwt = require("jsonwebtoken");

const ADMIN_EMAIL = "admin@woodscharikot.com";
const ADMIN_PASSWORD = "securepassword"; // You can use bcrypt later if needed

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "2h" });

  res.status(200).json({
    message: "Login successful",
    token,
  });
};
