const mongoose = require("mongoose");

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", agentSchema);
