import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyCvFTHf6M_IPAzHX2lmRs2mLHmoFP3gA6s",
        authDomain: "pawfect-db914.firebaseapp.com",
        databaseURL: "https://pawfect-db914.firebaseio.com",
        projectId: "pawfect-db914",
        storageBucket: "pawfect-db914.appspot.com",
        messagingSenderId: "268936524525",
        appId: "1:268936524525:web:a9eea4fd36fa4b6d69d2e4",
        measurementId: "G-NS7ZB8RDLC"
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;