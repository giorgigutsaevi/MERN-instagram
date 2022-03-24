import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
	apiKey: "AIzaSyDegU5kjiKl3Q59ZPJaWrSE1cjLSwFiiOQ",
  authDomain: "instagram-react-clone-b19a9.firebaseapp.com",
  projectId: "instagram-react-clone-b19a9",
  storageBucket: "instagram-react-clone-b19a9.appspot.com",
  messagingSenderId: "673048777601",
  appId: "1:673048777601:web:fe4848b38e28d430784e80"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };