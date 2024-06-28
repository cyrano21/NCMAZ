// lib/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonctions pour récupérer les données
export async function getPosts() {
  const postsCol = collection(db, "posts");
  const postSnapshot = await getDocs(postsCol);
  const postList = postSnapshot.docs.map((doc) => doc.data());
  return postList;
}

export async function getPostBySlug(slug) {
  const postDoc = doc(db, "posts", slug);
  const postSnap = await getDoc(postDoc);
  return postSnap.exists() ? postSnap.data() : null;
}

export { db };
