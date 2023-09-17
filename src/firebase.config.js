// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxGrXIaHccVmk5Z84AuyDA3VCzSbBsvxE",
  authDomain: "cloth-store-34ffc.firebaseapp.com",
  projectId: "cloth-store-34ffc",
  storageBucket: "cloth-store-34ffc.appspot.com",
  messagingSenderId: "437091912565",
  appId: "1:437091912565:web:68efd1854c01f68a87a13c",
  measurementId: "G-2MK4FNBCNH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
