import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getFirestore } from 'firebase/firestore'; // Import getFirestore
import { getAuth } from 'firebase/auth'; // Import getAuth
const firebaseConfig = {

  apiKey: "AIzaSyD9fOtgUGgr-CDRi18NabuvWfqdhyg-drE",

  authDomain: "linkedin-clone-83a14.firebaseapp.com",

  projectId: "linkedin-clone-83a14",

  storageBucket: "linkedin-clone-83a14.appspot.com",

  messagingSenderId: "616842363375",

  appId: "1:616842363375:web:12a0c0b2d163aee0e0f61a"

};
const app = initializeApp(firebaseConfig); // Initialize Firebase app
const db = getFirestore(app); // Get Firestore instance
const auth = getAuth(app); // Get Auth instance

export { db, auth };

