import { config } from "dotenv";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-Z5Gcg76eIo3KPeVTQdY4cdWd",
    apiKey: 'Bearer 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',
});

// Replace 'YOUR_OPENAI_API_KEY' with your actual API key
const openai = new OpenAIApi(configuration)
export const getChatResponse = async (req, res) => {
  const { message } = req.body;

  try {
    // Call the OpenAI API to get the response
    const response = await openai.completions.create({
      engine: 'davinci',
      model: 'text-davinci-003',
      prompt: message,
      maxTokens: 100,
    });

    // Extract and return the response from the API
    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    console.error('Error generating ChatGPT response:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


  
  
  
