import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWUnuo3kL_zkhJXRH88zfZYCeSOK_oHG0',
  authDomain: 'marketspot-app.firebaseapp.com',
  projectId: 'marketspot-app',
  storageBucket: 'marketspot-app.firebasestorage.app',
  messagingSenderId: '177845287911',
  appId: '1:177845287911:web:1735b9fec74558572bdb42',
  measurementId: 'G-RZ8176VVGR',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
