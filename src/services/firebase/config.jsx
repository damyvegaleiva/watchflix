import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfr5nAO-hHc62NGeAfX8XYP9oQN8HmCtg",
  authDomain: "watchflix-database.firebaseapp.com",
  projectId: "watchflix-database",
  storageBucket: "watchflix-database.appspot.com",
  messagingSenderId: "954142204629",
  appId: "1:954142204629:web:158577a2507c31e8b3785c",
  measurementId: "G-5N1KHKQ349",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
