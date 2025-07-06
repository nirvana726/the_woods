const express = require("express");
const router = express.Router();

const { getAllContacts, createContact } = require("../controller/contactController");

router.route("/getAllContacts").get(getAllContacts);
router.route("/createContact").post(createContact);

module.exports = router;
