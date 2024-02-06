import firebase from "firebase-admin";
export const app = firebase.initializeApp();
export const db = app.firestore();
