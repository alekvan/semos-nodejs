const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    founded: {
      type: Number,
      required: true,
    },
    //Ref countries
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("League", leagueSchema);
