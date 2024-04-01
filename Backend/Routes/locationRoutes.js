const express = require("express");
const router = express.Router();
const locationController = require("../Controller/locationController");

router.post("/save-location", locationController.saveLocation);

module.exports = router;
