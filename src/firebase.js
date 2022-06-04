import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC201eboSRvLPSceG5AGZwLk-jK4b3HCeE",
  authDomain: "disney-plus-45d49.firebaseapp.com",
  projectId: "disney-plus-45d49",
  storageBucket: "disney-plus-45d49.appspot.com",
  messagingSenderId: "67874297788",
  appId: "1:67874297788:web:d7180cc26bbd83b883fdb9",
  measurementId: "G-S29TV01MPS"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;