// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB63VjaZLZvigk8n4mtL1iVhgEaVnAHYlM',
  authDomain: 'clone-react-js.firebaseapp.com',
  databaseURL: 'https://clone-react-js.firebaseio.com',
  projectId: 'clone-react-js',
  storageBucket: 'clone-react-js.appspot.com',
  messagingSenderId: '10949720307',
  appId: '1:10949720307:web:cd11dc85ab2f167f079f86',
  measurementId: 'G-S2FZLBN5MS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
