AI Voice Detection API (Multi-Language)

This API detects whether a voice sample is AI-generated or human, supporting multiple languages. It returns a classification, confidence score, and explanation for the result.

Deployed URL
<YOUR_DEPLOYED_API_URL>

API Key
sk_test_123456789

API Endpoint

POST /api/voice-detection

Headers:

x-api-key: sk_test_123456789
Content-Type: application/json


Request Body:

{
  "language": "en",
  "audioFormat": "mp3",
  "audioBase64": "<base64-encoded-mp3>"
}


Response Format:

Success:

{
  "status": "success",
  "language": "en",
  "classification": "AI_GENERATED",
  "confidenceScore": 0.82,
  "explanation": "Detected unnatural pitch stability and low vocal variance"
}


Errors:

Missing fields / wrong format:

{
  "status": "error",
  "message": "Missing required fields"
}


Invalid API Key:

{
  "status": "error",
  "message": "Invalid API key"
}


## Deployment Note

Due to time constraints during the buildathon, the API is currently configured for local execution.

The application runs successfully in a local environment and follows the required API contract, request structure, authentication headers, and response format as specified in the problem statement.

The same codebase is deployable on platforms such as Render / Railway without modification.
