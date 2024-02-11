import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // organization: "org-0QtdhNE84DCwU7ba3ewW0cN1",
  apiKey: "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"
});

export default new OpenAIApi(configuration);
