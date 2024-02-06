import { db } from "./config";
import { user } from "../Store";
import { get } from "svelte/store";
import { pipe, prop, map, subtract, max, add } from "ramda";

import {
  doc,
  query,
  where,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

export const addDocument = async (collectionName, body) => {
  const { uid } = get(user);
  try {
    return addDoc(collection(db, collectionName), { uid, ...body });
  } catch (error) {
    console.error(error);
    // @Later, add a generic popup here for global errors
  }
};

export const updateDocument = async (collectionName, body) => {
  const { uid } = get(user);
  const { id, ...updateBody } = body;
  try {
    return updateDoc(doc(db, collectionName, body.id), { uid, ...updateBody });
  } catch (error) {
    console.error(error);
    // @Later, add a generic popup here for global errors
  }
};

export const deleteDocument = async (collectionName, docId) => {
  try {
    return deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    console.error(error);
    // @Later, add a generic popup here for global errors
  }
};

export const onCollectionSnapshot = async (collectionName, callback) => {
  const { uid } = get(user);

  try {
    return onSnapshot(
      query(collection(db, collectionName), where("uid", "==", uid)),
      pipe(
        prop("docs"),
        map((doc) => ({ id: doc.id, ...doc.data() })),
        callback
      )
    );
  } catch (error) {
    console.error(error);
    // @Later, add a generic popup here for global errors
  }
};

//
//
//
//
//
//
//
//

// CREDITS

export const createUser = async (body) => {
  try {
    const initialCredits = 10000;
    const userDocRef = await getDoc(doc(db, "users", body.email));

    if (userDocRef.exists()) return userDocRef.data();

    await setDoc(doc(db, "users", body.email), {
      ...body,
      credits: initialCredits,
    });

    return {
      ...body,
      credits: initialCredits,
    };
  } catch (error) {
    console.error("Error creating user: ", error);
  }
};

export const addCredits = async (creditsToAdd = 0) => {
  try {
    const { email, credits } = get(user);
    const updatedCredits = add(credits, creditsToAdd);

    await updateDoc(doc(db, "users", email), {
      credits: updatedCredits,
    });

    return user.update((_user) => ({ ..._user, credits: updatedCredits }));
  } catch (error) {
    console.error(error);
    console.error("Failed to add credits to due an error.");
    return null;
  }
};

export const deductCredits = async (creditsToDeduct = 0) => {
  try {
    const { email, credits } = get(user);
    const updatedCredits = max(0, subtract(credits, creditsToDeduct));

    await updateDoc(doc(db, "users", email), {
      credits: updatedCredits,
    });

    return user.update((_user) => ({ ..._user, credits: updatedCredits }));
  } catch (error) {
    console.error(error);
    console.error("Failed to deduct credits to due an error.");
    return null;
  }
};
