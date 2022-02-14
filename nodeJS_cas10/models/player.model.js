const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    date_of_birth: {
      type: Date,
    },
    // Ref from clubs
    club: {
      type: mongoose.Types.ObjectId,
      ref: "Club",
    },
    position: {
      type: String,
    },
    league: {
      type: String,
    },
    agent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
