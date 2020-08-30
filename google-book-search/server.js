const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rocky-cove-72179");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(() => {
  console.log(`Your server is listening at https://localhost:${PORT}`);
});