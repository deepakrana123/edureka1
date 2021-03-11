import firebase from "firebase";






// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcUo-zKpwJA8xHvWb6fSQKKQEyGPeWcQY",
    authDomain: "edureka-56715.firebaseapp.com",
    projectId: "edureka-56715",
    storageBucket: "edureka-56715.appspot.com",
    messagingSenderId: "56639876907",
    appId: "1:56639876907:web:d0d5bc4777651d3f9a9f6e",
    measurementId: "G-LQKCLLE5DN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};