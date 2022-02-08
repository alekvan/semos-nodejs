const mongoose = require("mongoose");

const coachSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coach", coachSchema);
