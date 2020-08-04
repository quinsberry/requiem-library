import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyD0xNEblArC8Jm1ZvbibXwi6gPieV0n1Nc',
  authDomain: 'requiem-library-server.firebaseapp.com',
  databaseURL: 'https://requiem-library-server.firebaseio.com',
  projectId: 'requiem-library-server',
  storageBucket: 'requiem-library-server.appspot.com',
  messagingSenderId: '727221146386',
  appId: '1:727221146386:web:31074320f1d2c62d8419cb',
  measurementId: 'G-56J793DTZT',
})

const db = firebase.firestore()

export default db
