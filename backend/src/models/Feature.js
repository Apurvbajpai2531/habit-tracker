const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  name: String,
  enabled: Boolean,
  rolloutPercentage: Number,
  environment: String
});

module.exports = mongoose.model("Feature", FeatureSchema);
