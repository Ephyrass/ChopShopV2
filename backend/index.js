const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
const userRoutes = require("./routes/User");
const orderRoutes = require("./routes/Order");

mongoose
  .connect(
    "mongodb+srv://Ephyras:Jb01051995@cluster0-igmbx.mongodb.net/Shop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api", orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
