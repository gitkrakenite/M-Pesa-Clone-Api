const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    ownerUsername: { type: String, required: true },
    ownerPhone: { type: String, required: true },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Wallet = mongoose.model("wallet", walletSchema);

module.exports = Wallet;
