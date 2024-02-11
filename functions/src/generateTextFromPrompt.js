import openai from "../libs/openai.js";
import axios from 'axios';

export default async ({ prompt, temperature, maxTokens }) => {
  try {
    let mode = "proxy";
    if (mode == "default") {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: prompt,
          }
        ],
        temperature: temperature || 0.5,
        max_tokens: maxTokens || 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      });

      return response.data.choices[0].message.content.trim();
    } else if (mode == "proxy") {
      const postData = {
        prompt,
        temperature,
        maxTokens
      };
      const response = await axios.post('http://67.217.228.36/open_ai_middleware.php', postData);
      if (response.status === 200) {
        // Parse the JSON response and send it back to the client
        console.log("response.status === 200");
        // console.log(response.data.choices[0].message.content.trim());
        return response.data.choices[0].message.content.trim();
      } else {
        return res.status(response.status).send('Error fetching response from the middleware.');
      }
    }

  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw new functions.https.HttpsError('unknown', 'Failed to fetch response from OpenAI');
  }
};
