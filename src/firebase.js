import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaCDC2WLvfAp1-cM4rwLa_6gTBX0EkEw4",
  authDomain: "clone-13d32.firebaseapp.com",
  databaseURL: "https://clone-13d32.firebaseio.com",
  projectId: "clone-13d32",
  storageBucket: "clone-13d32.appspot.com",
  messagingSenderId: "80643137468",
  appId: "1:80643137468:web:1e5013cb3e648cd0f3d5b9",
  measurementId: "G-X5MBJ65RHY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore(); 
const auth = firebase.auth();

export {db,auth};