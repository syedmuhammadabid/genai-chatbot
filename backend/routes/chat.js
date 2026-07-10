
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

router.post('/message', async (req, res) => {
  try {
    const { message } = req.body;

    // Input validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message must be a non-empty string.' });
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message must be 2000 characters or fewer.' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      // model: "gpt-4o-mini",
      store: true,
      messages: [{ role: 'user', content: message }]
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.code || 'UNKNOWN');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
