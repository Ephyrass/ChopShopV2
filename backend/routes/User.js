const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    adress: req.body.adress,
  });

  user
    .save()
    .then((user) => {
      res.json({
        token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        }),
      });
    })
    .catch((error) => res.status(400).json({ error }));
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then((user) => {
      res.status(200).json({
        token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        }),
      });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.get("/profile", auth, (req, res) => {
  User.findOne({ _id: req.body.userId })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => {
      res.status(400).json({ error });
    });
});

router.put("/profile", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.body.userId }, req.body)
    .then(() => res.status(200).json({ message: "Objet modifié" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
