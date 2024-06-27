// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBcRJ8smWgw8s07Letn1apKSxgH7b_kmLE",
//   authDomain: "grocery-store-85346.firebaseapp.com",
//   projectId: "grocery-store-85346",
//   storageBucket: "grocery-store-85346.appspot.com",
//   messagingSenderId: "1073452178758",
//   appId: "1:1073452178758:web:a8517d788fa9d54601d947",
//   measurementId: "G-N5JSLX4D8S"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBFLQYdEHOIRCHmvCa33Wim7-TDwozp2nc",
  authDomain: "shopease-12de9.firebaseapp.com",
  projectId: "shopease-12de9",
  storageBucket: "shopease-12de9.appspot.com",
  messagingSenderId: "43874212120",
  appId: "1:43874212120:web:2fc3d6cf803f535544666d",
  measurementId: "G-FNXCR59FH1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
