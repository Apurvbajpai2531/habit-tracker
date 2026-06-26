exports.suggestFeature = (usage) => {
  if (usage > 80) return "Enable feature for all users";
  if (usage > 50) return "Gradual rollout";
  return "Keep feature disabled";
};
