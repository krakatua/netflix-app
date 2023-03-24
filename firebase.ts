// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBS-j5E6uXRW9spg3dYfh7nIZMxWW9DU4",
  authDomain: "netflix-app-clone-f2f0e.firebaseapp.com",
  projectId: "netflix-app-clone-f2f0e",
  storageBucket: "netflix-app-clone-f2f0e.appspot.com",
  messagingSenderId: "199780906062",
  appId: "1:199780906062:web:1fc248ff2289a1d7473f1f"

}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }