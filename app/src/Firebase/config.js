import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const app = initializeApp({
  // apiKey: "AIzaSyD6t8-C60s93TcoVd6LN1HS-oLtJ1SaVEo",
  // authDomain: "flash-adapter-384805.firebaseapp.com",
  // projectId: "flash-adapter-384805",
  // storageBucket: "flash-adapter-384805.appspot.com",
  // messagingSenderId: "716910738648",
  // appId: "1:716910738648:web:cf1b80f01821b81f1f2bad",
  apiKey: "AIzaSyBP1ajkdGeDlMd1KNb4vvqKmabOsE5nMEc",
  authDomain: "test-e3349.firebaseapp.com",
  projectId: "test-e3349",
  storageBucket: "test-e3349.appspot.com",
  messagingSenderId: "178216443882",
  appId: "1:178216443882:web:351df2912a5bdb604d5c93",
  measurementId: "G-3S1M1MLXDP"
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const functions = getFunctions(app);

if (import.meta.env.MODE.match("development")) {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectAuthEmulator(auth, "http://localhost:9099", {
    disableWarnings: true,
  });
}
