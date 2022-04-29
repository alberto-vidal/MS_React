import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfWPB1dAgtyfjx9ZHqg1vSkj5IzUDYL_Y",
  authDomain: "teste-aa0ad.firebaseapp.com",
  databaseURL: "https://teste-aa0ad-default-rtdb.firebaseio.com",
  projectId: "teste-aa0ad",
  storageBucket: "teste-aa0ad.appspot.com",
  messagingSenderId: "506139343415",
  appId: "1:506139343415:web:d51535b48fe4fc1d091db2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

