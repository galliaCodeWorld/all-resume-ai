import { auth } from "./config";
import { signOut, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signout = () => signOut(auth);
export const loginWithGoogle = () => signInWithRedirect(auth, provider);
