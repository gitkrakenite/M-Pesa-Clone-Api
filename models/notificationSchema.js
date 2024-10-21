const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    recipientUsername: { type: String, required: true },
    recipientPhone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Notification = mongoose.model("notification", notificationSchema);

module.exports = Notification;
