const express = require("express");
const router = express.Router();
const { analyzeVoice } = require("../utils/analyzers");

router.post("/voice-detection", async (req, res) => {
  try {
    const { language, audioFormat, audioBase64 } = req.body;

    if (!language || !audioFormat || !audioBase64) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields"
      });
    }

    if (audioFormat !== "mp3") {
      return res.status(400).json({
        status: "error",
        message: "Only MP3 format supported"
      });
    }

    const audioBuffer = Buffer.from(audioBase64, "base64");

    const result = analyzeVoice(audioBuffer, language);

    return res.json({
      status: "success",
      language,
      classification: result.classification,
      confidenceScore: result.confidenceScore,
      explanation: result.explanation
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error"
    });
  }
});

module.exports = router;
