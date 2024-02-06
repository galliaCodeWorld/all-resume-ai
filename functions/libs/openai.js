import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-0QtdhNE84DCwU7ba3ewW0cN1",
  apiKey: "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",
});

export default new OpenAIApi(configuration);
