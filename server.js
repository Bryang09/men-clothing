const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const clothing = require("./routes/api/clothing");

const app = express();

// BODYPARSER MIDDLEWARE
app.use(bodyParser.json());

// DB CONFIG
const db = require("./config/keys").mongoURI;

// CONNECT TO MONGO
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// USE ROUTES
app.use("/api/clothing", clothing);

const PORT = process.env.PORT || 5000;
// SERVE STATIC ASSETS IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  // SET STATIC FOLDER
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
