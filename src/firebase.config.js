// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7V0M4YvrhxmnTzFZrzHpZXg3RPESH6wc",
  authDomain: "house-marketplace-app-81304.firebaseapp.com",
  projectId: "house-marketplace-app-81304",
  storageBucket: "house-marketplace-app-81304.appspot.com",
  messagingSenderId: "1087978875805",
  appId: "1:1087978875805:web:0dd40a84e7ac53dc0f5d74"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()