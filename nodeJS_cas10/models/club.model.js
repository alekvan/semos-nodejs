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
      type: String,
      required: true,
    },
    //Ref from league
    league: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "League",
    },
    players: [
      {
        by: mongoose.Schema.Types.ObjectId,
        body: "string",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", clubSchema);
