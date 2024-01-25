const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config({ path: '../.env' }); 

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: prompt,
        max_tokens: 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`
        },
      }
    );
    res.json({ response: openaiResponse.data.choices[0].text });
  } catch (error) {
    console.error('Erreur lors de la communication avec l\'API OpenAI:', error);
    res.status(500).json({ error: "Erreur lors de la communication avec OpenAI" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
