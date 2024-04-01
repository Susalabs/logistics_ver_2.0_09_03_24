// config.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://divyanshujamloki05:K2239OJS90ISXaZJ@cluster0.d3hlbbp.mongodb.net/logistic?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
