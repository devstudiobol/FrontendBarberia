
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4MHqr82ojTvAaQveNRV099xpvuyrZWAY",
  authDomain: "barber-fachera.firebaseapp.com",
  projectId: "barber-fachera",
  storageBucket: "barber-fachera.appspot.com",
  messagingSenderId: "945597864716",
  appId: "1:945597864716:web:af1dcd44f8aa938103c729",
  measurementId: "G-L9TZR59EW9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp