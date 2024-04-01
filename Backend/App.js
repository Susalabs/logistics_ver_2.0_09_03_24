const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config");
const locationRoutes = require("./routes/locationRoutes");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const port = 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());


app.use(helmet());


connectDB();


app.use("/location", locationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
