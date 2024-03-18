// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNo_GTP3kBYlAnEWOt7M0kZHZpC5L35ik',
  authDomain: 'llmcrowdsourcing.firebaseapp.com',
  projectId: 'llmcrowdsourcing',
  storageBucket: 'llmcrowdsourcing.appspot.com',
  messagingSenderId: '253292850390',
  appId: '1:253292850390:web:9cd9be674eab65c069ad77',
  databaseURL: 'https://llmcrowdsourcing-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

export const getDBData = async () => {
  try {
    const data = await db.ref().get();
    return data.val();
  } catch (err) {
    throw Error(`${err}`);
  }
};

export const setDBData = async (key: string, value: any) => {
  try {
    await db.ref(key).set(value);
  } catch (err) {
    throw Error(`${err}`);
  }
};

export default firebase;
