// models/location.js
const mongoose = require("mongoose");

// Define the Location schema
const locationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

// Create the Location model
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
