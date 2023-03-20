import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import firebaseConfig from '../config/firebaseConfig.json'


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = () => getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);