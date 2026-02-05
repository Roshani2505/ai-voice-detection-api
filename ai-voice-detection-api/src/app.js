require("dotenv").config();
const express = require("express");

const voiceDetectionRoute = require("./routes/voiceDetection");
const apiKeyAuth = require("./middleware/apiKeyAuth");

const app = express();
app.use(express.json({ limit: "10mb" }));

app.use("/api", apiKeyAuth, voiceDetectionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
