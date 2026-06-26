const express = require("express");
const router = express.Router();
const Feature = require("../models/Feature");

// Create feature
router.post("/", async (req, res) => {
  const { name } = req.body;

  const feature = new Feature({
    name,
    enabled: false,
    rolloutPercentage: 0,
    environment: "dev"
  });

  await feature.save();
  res.json(feature);
});

// Get all features
router.get("/", async (req, res) => {
  const features = await Feature.find();
  res.json(features);
});

// Toggle feature
router.put("/:id", async (req, res) => {
  const feature = await Feature.findById(req.params.id);
  feature.enabled = !feature.enabled;
  await feature.save();
  res.json(feature);
});

module.exports = router;
