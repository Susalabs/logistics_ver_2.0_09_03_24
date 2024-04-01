const express = require("express");
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/locationRoutes");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());


app.use(helmet());
const connectDB = require("./config");

try {
  connectDB()
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("MongoDB Atlas connection error:", error);
      process.exit(1);
    });
} catch (err) {
  console.log(err);
}




app.use("/location", locationRoutes);
app.use("/get", (req, res) => {
    
    res.send("Api are working");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
