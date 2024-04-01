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
