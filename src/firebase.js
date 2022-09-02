import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcI34k-YenLr6DZUCFDWHOcXqeH-t_-X0",
  authDomain: "linkdin-cloneui.firebaseapp.com",
  projectId: "linkdin-cloneui",
  storageBucket: "linkdin-cloneui.appspot.com",
  messagingSenderId: "342547504373",
  appId: "1:342547504373:web:8b2f1d8722ed09fafa39bc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
