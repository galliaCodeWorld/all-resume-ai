import { user } from "../Store";
import { get } from "svelte/store";
import { db } from "../Firebase/config";
import {
  doc,
  query,
  where,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";

const collectionName = "resumes";

export const getResume = async (id) => {
  const document = await getDoc(doc(db, collectionName, id));
  const resumeDoc = document.exists()
    ? { id: document.id, ...document.data() }
    : null;

  return resumeDoc;
};

export const getResumes = async () => {
  const response = await getDocs(
    query(collection(db, collectionName), where("uid", "==", get(user).uid))
  );

  const resumes = response.docs.map((_doc) =>
    _doc.exists() ? { id: _doc.id, ..._doc.data() } : null
  );

  return resumes;
};

export const createResume = async (body) =>
  await setDoc(doc(collection(db, collectionName)), {
    ...body,
    createdAt: new Date(),
  });

export const updateResume = async (document) => {
  const docRef = doc(db, collectionName, document.id);
  const thisDocument = await getDoc(docRef);
  if (!thisDocument.exists()) return;
  return await updateDoc(docRef, document);
};

export const deleteResume = async (id) => {
  const docRef = doc(db, collectionName, document.id);
  const thisDocument = await getDoc(docRef);

  if (!thisDocument.exists()) return;

  return await deleteDoc(doc(db, collectionName, id));
};
