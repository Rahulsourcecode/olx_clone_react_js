import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAjmhL_QEIR3_wcMHitTpb6RioLFiu0uuU",
  authDomain: "fir-36c5d.firebaseapp.com",
  projectId: "fir-36c5d",
  storageBucket: "fir-36c5d.appspot.com",
  messagingSenderId: "17835289313",
  appId: "1:17835289313:web:d10200b505c6139180e5a0",
  measurementId: "G-WKQ6RD4ZL9"
};

  export default firebase.initializeApp(firebaseConfig)