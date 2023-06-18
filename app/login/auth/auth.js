import { auth } from '..../firebase_setup/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const loginEmailPassword = async (loginEmail, loginPass) => {
    const userCreds = await signInWithEmailAndPassword(auth, email, pass);
}

const signUpEmailPassword = async (signUpEmail, signUpPassword) => {
    const userCreds = await createUserWithEmailAndPassword(auth, email, password);
    
}