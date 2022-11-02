// import firebase from "firebase/app";
// import "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

/* code from our Firebase console */
// const firebaseConfig = {
//     apiKey: "AIzaSyAFz6qZjQRWsJmzmIo818vtvRaf5mIqwbU",
//     authDomain: "tonoteblog.firebaseapp.com",
//     projectId: "tonoteblog",
//     storageBucket: "tonoteblog.appspot.com",
//     messagingSenderId: "14930239137",
//     appId: "1:14930239137:web:57358a041a13e052575ae0",
//     measurementId: "G-T7XZ6JYLLY"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(getAnalytics);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;


// export { timestamp };
// export { analytics };
// export default firebaseApp.firestore();



import firebase from "firebase";
require("firebase/firestore");

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAFz6qZjQRWsJmzmIo818vtvRaf5mIqwbU",
    authDomain: "tonoteblog.firebaseapp.com",
    projectId: "tonoteblog",
    storageBucket: "tonoteblog.appspot.com",
    messagingSenderId: "14930239137",
    appId: "1:14930239137:web:57358a041a13e052575ae0",
    measurementId: "G-T7XZ6JYLLY"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db };


// import firebase from "firebase/app";
// import "firebase/firestore";

// var firebaseConfig = {
//     apiKey: "AIzaSyAFz6qZjQRWsJmzmIo818vtvRaf5mIqwbU",
//     authDomain: "tonoteblog.firebaseapp.com",
//     projectId: "tonoteblog",
//     storageBucket: "tonoteblog.appspot.com",
//     messagingSenderId: "14930239137",
//     appId: "1:14930239137:web:57358a041a13e052575ae0",
//     measurementId: "G-T7XZ6JYLLY"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// console.log(firebaseApp);
// export { timestamp };
// export default firebaseApp.firestore();
