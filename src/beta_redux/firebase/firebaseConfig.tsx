// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC1b8IN0HdP-6CmZGKYDMS2gnWn0apyW0",
  authDomain: "test-task-a8b04.firebaseapp.com",
  projectId: "test-task-a8b04",
  storageBucket: "test-task-a8b04.firebasestorage.app",
  messagingSenderId: "52690979157",
  appId: "1:52690979157:web:f89bd70d995c570d3447dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };