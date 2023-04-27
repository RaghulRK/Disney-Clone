import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrGUwvzZ19PQlHve0l4bwOUpEHbzGekRU",
  authDomain: "disneyplus-cone.firebaseapp.com",
  projectId: "disneyplus-cone",
  storageBucket: "disneyplus-cone.appspot.com",
  messagingSenderId: "881381867023",
  appId: "1:881381867023:web:be92bf256c938558feed7a",
  measurementId: "G-7ZJXMZJS86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, storage, provider };
export default db;
