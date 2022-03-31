import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyC4V9fHc7yaX9F-p1TZ4juUjAFfVC2mFic",
  authDomain: "react-instagram-clone-7e71e.firebaseapp.com",
  projectId: "react-instagram-clone-7e71e",
  storageBucket: "react-instagram-clone-7e71e.appspot.com",
  messagingSenderId: "1059685066237",
  appId: "1:1059685066237:web:fe4293cee15f7659b1a594"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };