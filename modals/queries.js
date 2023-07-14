const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    place: String,
    interests: String,
    budget: String,
    travelers: String,
    name: String,
    email: String,
    number: String,
    duration: String,
    when: String,
    stage_of_planning: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const queryModal = mongoose.model("Query", querySchema, "queries");

module.exports = queryModal;
