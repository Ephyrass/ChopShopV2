const express = require("express");
const auth = require("../middleware/auth");
const Order = require("../models/Order");
const router = express.Router();

router.post("/order", auth, (req, res) => {
  const order = new Order({
    items: req.body.items,
    price: req.body.price,
    userId: req.body.userId,
  });
  order
    .save()
    .then(() => res.status(201).json({ message: "Order created" }))
    .catch((error) => res.status(400).json({ error }));
});

router.get("/getorder", auth, (req, res) => {
  Order.find({ userId: req.body.userId })
    .then((order) => {
      res.status(200).json({ order });
    })
    .catch((error) => res.status(401).json({ error }));
});

module.exports = router;
