const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = mongoose.Schema({
  items: { type: Schema.Types.Array },
  price: { type: Number },
  userId: { type: Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("Order", OrderSchema);
