const mongoose = require("mongoose");

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // players: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Player",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", agentSchema);
