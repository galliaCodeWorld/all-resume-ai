import { auth } from "./config";
import { signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signout = () => signOut(auth);
// export const loginWithGoogle = () => signInWithRedirect(auth, provider);

export const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
        // Handle the signed-in user information.
        console.log("result.user", result.user);
    }).catch((error) => {
        // Handle errors here.
        console.error(error);
    });
};
