import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage'; // esto para agregar un import de data proximamente

// lee el env para Vite o CRA (en caso de algun error se mostrara en el mismo navegador)
const viteEnv = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};
const craEnv = (typeof globalThis !== 'undefined' && globalThis.process && globalThis.process.env) ? globalThis.process.env : {};
const pickEnv = (viteKey, craKey) => viteEnv[viteKey] ?? craEnv[craKey];
const cfg = {
  apiKey: pickEnv('VITE_FIREBASE_API_KEY', 'REACT_APP_FIREBASE_API_KEY'),
  authDomain: pickEnv('VITE_FIREBASE_AUTH_DOMAIN', 'REACT_APP_FIREBASE_AUTH_DOMAIN'),
  projectId: pickEnv('VITE_FIREBASE_PROJECT_ID', 'REACT_APP_FIREBASE_PROJECT_ID'),
  storageBucket: pickEnv('VITE_FIREBASE_STORAGE_BUCKET', 'REACT_APP_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: pickEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', 'REACT_APP_FIREBASE_MESSAGING_SENDER_ID'),
  appId: pickEnv('VITE_FIREBASE_APP_ID', 'REACT_APP_FIREBASE_APP_ID'),
};

// Solo como inicio
const isConfigured = Object.values(cfg).every(v => typeof v === 'string' && v.length > 0);

let app, auth, db; // , storage
if (isConfigured) {
  app = initializeApp(cfg);
  auth = getAuth(app);
  db = getFirestore(app);
  // storage = getStorage(app);
}

export { app, auth, db, onAuthStateChanged, signInWithEmailAndPassword, signOut, isConfigured };
