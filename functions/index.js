import functions from "firebase-functions";

export const generateTextFromPrompt = functions.https.onCall(
  (await import("./src/generateTextFromPrompt.js")).default
);

//

//
//
//

// import { db } from "./libs/firebase.js";

// db.collection("billing").doc("sample-ui").set({
//   uid: "userid",
//   data: false,
// });

// See Chat GPT
