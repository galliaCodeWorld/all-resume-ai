import { functions } from "./config";
import { httpsCallable } from "firebase/functions";

export const generateTextFromPrompt = httpsCallable(
  functions,
  "generateTextFromPrompt"
);
