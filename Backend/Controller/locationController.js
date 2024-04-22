const Location = require("../Model/location");

exports.saveLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const location = new Location({ latitude, longitude });
    await location.save();
    res.send("Location saved successfully");
  } catch (error) {
    console.error(error);
      res.status(500).send("Error occurred");
  }
};

exports.getLocation = async (req, res) => {
  try {
    // Perform any validation or sanitization of request parameters if needed
     console.log('clicked')
    // Query MongoDB to retrieve lat-long data
    const locations = await Location.find();

    // If no locations found, return appropriate response
    if (!locations || locations.length === 0) {
      return res.status(404).send("No locations found");
    }

    // If locations found, return the data
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
};
