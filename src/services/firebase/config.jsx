import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTRo8d4OwOJoYYeaKkMPbWX-KHpVk9A70",
  authDomain: "watchflix-824a9.firebaseapp.com",
  projectId: "watchflix-824a9",
  storageBucket: "watchflix-824a9.appspot.com",
  messagingSenderId: "956323685910",
  appId: "1:956323685910:web:3eab2f10814e2c7e257737",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
