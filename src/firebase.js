
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB-TLtTtiJoYqdjsJK0CldaxH76a2Pz1ZQ",
  authDomain: "hotel-book-4933f.firebaseapp.com",
  projectId: "hotel-book-4933f",
  storageBucket: "hotel-book-4933f.appspot.com",
  messagingSenderId: "635556852618",
  appId: "1:635556852618:web:c54e093248fcfe21e50e73"
};


const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)

export default app;

