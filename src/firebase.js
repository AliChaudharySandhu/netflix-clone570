import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbWSyOg5mNrN-y-YroRTj6tyF3UrO90vs",
    authDomain: "netflix-clone570.firebaseapp.com",
    projectId: "netflix-clone570",
    storageBucket: "netflix-clone570.appspot.com",
    messagingSenderId: "335256938504",
    appId: "1:335256938504:web:f0c0135e7362950ee309bd"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db