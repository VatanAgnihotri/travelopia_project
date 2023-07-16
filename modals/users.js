const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const userModal = mongoose.model("User", userSchema, "users");

module.exports = userModal;
