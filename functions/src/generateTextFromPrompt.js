import openai from "../libs/openai.js";

export default async ({ prompt, temperature, maxTokens }) => {
  try {
    const completion = await openai.createChatCompletion({
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      model: "gpt-3.5-turbo",
      max_tokens: maxTokens || 2048,
      temperature: temperature || 0.7,
    });

    const response = completion.data.choices[0].message.content
      .replace("\n", "")
      .replace("\n", "");

    return response;
  } catch (error) {
    console.log(error);
  }
};
