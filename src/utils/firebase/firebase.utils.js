import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider } from "firebase/auth"
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocmentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userDocRef
}