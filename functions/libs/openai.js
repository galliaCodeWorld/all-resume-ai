import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-0QtdhNE84DCwU7ba3ewW0cN1",
  apiKey: "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"
  //"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"
  //"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"
});

export default new OpenAIApi(configuration);
