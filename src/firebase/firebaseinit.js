import firebase from "firebase/app";
import "firebase/firestore";
/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyAFz6qZjQRWsJmzmIo818vtvRaf5mIqwbU",
    authDomain: "tonoteblog.firebaseapp.com",
    projectId: "tonoteblog",
    storageBucket: "tonoteblog.appspot.com",
    messagingSenderId: "14930239137",
    appId: "1:14930239137:web:57358a041a13e052575ae0",
    measurementId: "G-T7XZ6JYLLY"
};

// // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { timestamp };
export default firebaseApp.firestore();
