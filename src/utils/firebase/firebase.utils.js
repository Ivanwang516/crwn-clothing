import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore,
    doc,
    getDoc,
    setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3R-7VM5tT14ElFHu-EnVKZx2E9MPWKeo",
  authDomain: "crwn-db-b59d1.firebaseapp.com",
  projectId: "crwn-db-b59d1",
  storageBucket: "crwn-db-b59d1.appspot.com",
  messagingSenderId: "382948438899",
  appId: "1:382948438899:web:c05019e6eadca4d46e8b06",
  measurementId: "G-S4XEQN1YXK"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocmentFromAuth = async(userAuth, additionalInformation={}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return ;
    return await createUserWithEmailAndPassword(auth, email, password) 
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return ;
    return await signInWithEmailAndPassword(auth, email, password)
}