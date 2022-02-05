const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    // Ref from clubs
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
