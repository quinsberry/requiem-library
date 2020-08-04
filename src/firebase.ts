import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAzC1se-FmMtEmKdo6rpR1CbQnnpnkEYx4',
  authDomain: 'requiem-library.firebaseapp.com',
  databaseURL: 'https://requiem-library.firebaseio.com',
  projectId: 'requiem-library',
  storageBucket: 'requiem-library.appspot.com',
  messagingSenderId: '369536495580',
  appId: '1:369536495580:web:3a65e4fadc689ef024a919',
  measurementId: 'G-FVEBT02QL0',
})

const db = firebase.firestore()

export default db
