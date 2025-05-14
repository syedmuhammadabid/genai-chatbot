
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
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      // model: "gpt-4o-mini",
      store: true,
      messages: [{ role: 'user', content: message }]
    });
    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).send('Something went wrong');
  }
});

module.exports = router;
