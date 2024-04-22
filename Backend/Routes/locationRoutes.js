const express = require("express");
const router = express.Router();
const locationController = require("../Controller/locationController");

router.post("/save-location", locationController.saveLocation);

router.get("/gets", locationController.getLocation);
module.exports = router;
