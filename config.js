import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCN7h46bPitcs2PgdTKaK-qys8h9I266Ls",
    authDomain: "project71-1dd82.firebaseapp.com",
    projectId: "project71-1dd82",
    storageBucket: "project71-1dd82.appspot.com",
    messagingSenderId: "672258536633",
    appId: "1:672258536633:web:3a9aff027e393a6fc29768"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
