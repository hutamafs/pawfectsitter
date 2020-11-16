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
  get ref () {
      return firebase.database().ref('messages')
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };

  createAccount = async user => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(
        function() {
          console.log(
            'created user successfully. User email:' +
              user.email +
              ' name:' +
              user.name
          );
          var userf = firebase.auth().currentUser;
          userf.updateProfile({ displayName: user.name }).then(
            function() {
              console.log('Updated displayName successfully. name:' + user.name);
              alert(
                'User ' + user.name + ' was created successfully. Please login.'
              );
            },
            function(error) {
              console.warn('Error update displayName.');
            }
          );
        },
        function(error) {
          console.error('got error:' + typeof error + ' string:' + error.message);
          alert('Create account failed. Error: ' + error.message);
        }
      );
  };

  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  parse = message => {
      const {user, text, timestamp} = message.val()
      const {key: _id} = message
      const createdAt = new Date(timestamp)

      return (
          _id,createdAt,text,user
      )
  }

  get = callback => {
    this.ref.on('child_added', snapshot => callback(this.parse.snapshot))
  }


  send = messages => {
    messages.forEach(item => {
        const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
        }
        this.ref.push(message)
    })
  };

  off() {
      this.ref.off()
  }

  get uid () {
    return (firebase.auth().currentUser || {}).uid
  }

  checkAuth = () => {
      firebase.auth().onAuthStateChanged(user => {
          if(!user) {
              firebase.auth().signInAnonymously()
          }
      })
  }
}



const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;