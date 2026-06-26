const express = require("express");
const router = express.Router();
const Feature = require("../models/Feature");

// Create Feature
router.post("/", async (req, res) => {
  const feature = new Feature(req.body);
  await feature.save();
  res.json(feature);
});

// Get all
router.get("/", async (req, res) => {
  const features = await Feature.find();
  res.json(features);
});

// Toggle
router.put("/:id", async (req, res) => {
  const feature = await Feature.findById(req.params.id);
  feature.enabled = !feature.enabled;
  await feature.save();
  res.json(feature);
});

module.exports = router;
