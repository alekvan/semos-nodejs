const mongoose = require("mongoose");

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    players: [
      {
        ref: "Player",
        type: mongoose.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", agentSchema);
