import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAy3vv3QrqVmbxYLOfjmNM_PGcUEC2G8IY",
  authDomain: "mentormatchy.firebaseapp.com",
  projectId: "mentormatchy",
  storageBucket: "mentormatchy.appspot.com",
  messagingSenderId: "696759297437",
  appId: "1:696759297437:web:e081f2d74297745b09bb74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };