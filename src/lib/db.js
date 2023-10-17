// Firebase Initial
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // TODO: 請在此處放入您的FIREBASE CONFIG

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore database
const db = getFirestore(app);
export default db;