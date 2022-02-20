const mongoose = require("mongoose");

const clubSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    founded: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "Country",
    },
    //Ref from league
    league: {
      type: String,
      required: true,
    },
    players: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Player",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", clubSchema);
