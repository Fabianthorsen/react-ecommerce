import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC0j6L_DPeFlR1RCA8d37NJFwCp0rJLPMY',
  authDomain: 'e-commerce-tut-f951b.firebaseapp.com',
  projectId: 'e-commerce-tut-f951b',
  storageBucket: 'e-commerce-tut-f951b.appspot.com',
  messagingSenderId: '914270166165',
  appId: '1:914270166165:web:915d8f83abda3ed00a0f9c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
