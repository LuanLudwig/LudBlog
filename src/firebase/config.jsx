import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDVgtG7yxITa8wKdZMIkU9_P7YLBGNOOJQ",
  authDomain: "blog-6a986.firebaseapp.com",
  projectId: "blog-6a986",
  storageBucket: "blog-6a986.appspot.com",
  messagingSenderId: "258690247725",
  appId: "1:258690247725:web:c705789deee245f0aa9ca4"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };