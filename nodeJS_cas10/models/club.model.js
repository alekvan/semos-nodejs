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
    },
    //Ref from league
    league: {
      type: String,
      required: true,
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
