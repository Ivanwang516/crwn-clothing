import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyD3R-7VM5tT14ElFHu-EnVKZx2E9MPWKeo",
    authDomain: "crwn-db-b59d1.firebaseapp.com",
    projectId: "crwn-db-b59d1",
    storageBucket: "crwn-db-b59d1.appspot.com",
    messagingSenderId: "382948438899",
    appId: "1:382948438899:web:c05019e6eadca4d46e8b06",
    measurementId: "G-S4XEQN1YXK"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
