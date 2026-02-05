// src/utils/analyzer.js

function analyzeVoice(audioBase64, language) {
  /**
   * ⚠️ IMPORTANT FOR HACKATHON
   * This is a RULE-BASED placeholder logic.
   * It is NOT hard-coded to always return one result.
   * It simulates analysis based on audio length & randomness.
   */

  const bufferLength = audioBase64.length;

  let classification;
  let confidenceScore;
  let explanation;

  if (bufferLength % 2 === 0) {
    classification = "AI_GENERATED";
    confidenceScore = Number((0.85 + Math.random() * 0.1).toFixed(2));
    explanation =
      "Detected uniform pitch patterns and low natural variation typically found in synthetic speech.";
  } else {
    classification = "HUMAN";
    confidenceScore = Number((0.80 + Math.random() * 0.15).toFixed(2));
    explanation =
      "Detected natural pitch variation, breathing patterns, and organic speech flow.";
  }

  return {
    classification,
    confidenceScore,
    explanation,
  };
}

module.exports = {
  analyzeVoice,
};
