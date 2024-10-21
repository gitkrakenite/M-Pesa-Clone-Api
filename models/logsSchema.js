const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema(
  {
    ownerUsername: { type: String, required: true },
    ownerPhone: { type: String, required: true },
    activity: { type: String, required: true },
  },
  { timestamps: true }
);

const Logs = mongoose.model("logs", logsSchema);

module.exports = Logs;
