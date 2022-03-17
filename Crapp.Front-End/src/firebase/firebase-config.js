// IMPORT DE FUNCIONES DEL SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // FUNCION FIRESTORE

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// CONFIGURACIÓN DE LA CONEXIÓN
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// INICIALIZACIÓN FIREBASE
const app = initializeApp(firebaseConfig);
// INICIALIZACIÓN FIRESTORE
export const db = getFirestore(app);
// INICIALIZACIÓN AUTH
export const auth = getAuth(app);
