// FirebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6dqFX78S6_bkN_ILjdWKDgXwGwbpxUXc",
  authDomain: "koneksi-firebaseapp.firebaseapp.com",
  projectId: "koneksi-firebaseapp",
  storageBucket: "koneksi-firebaseapp.firebasestorage.app",
  messagingSenderId: "288035843422",
  appId: "1:288035843422:web:c4fdaed6377f99f46a73cf",
  measurementId: "G-KKLHSFNG33"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const FIREBASE_DB = getFirestore(app);