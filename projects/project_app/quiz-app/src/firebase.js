// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-2E7hmb1_A9GGPMX26IVoxNq3zNCQh-o",
  authDomain: "quizapp-9ec35.firebaseapp.com",
  projectId: "quizapp-9ec35",
  storageBucket: "quizapp-9ec35.appspot.com",
  messagingSenderId: "750566920976",
  appId: "1:750566920976:web:8393af7fb30abf75fd8b95",
  measurementId: "G-Y2ZMZ3V110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);