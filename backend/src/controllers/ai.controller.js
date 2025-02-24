const aiService = require("../services/ai.service");

const getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res
        .status(400)
        .json({ success: false, message: "Prompt is required" });
    }

    const response = await aiService(code);
    res.json({ success: true, response });
  } catch (error) {
    console.error("AI Service Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error generating response" });
  }
};
// Make sure to export it correctly
module.exports = { getReview };
