import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVLGHTvj7XuAvoMAjjAW5U9B-2WC46c-M",
  authDomain: "app-vcechinese.firebaseapp.com",
  projectId: "app-vcechinese",
  storageBucket: "app-vcechinese.appspot.com",
  messagingSenderId: "57841991893",
  appId: "1:57841991893:web:a09c0887fd3e5d8710a25c",
  measurementId: "G-E5SWLBMRZ5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
