import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDZ-UjMLd58geupF7FNoypkoS2r2DCSqIw',
  authDomain: 'crwn-db-462df.firebaseapp.com',
  projectId: 'crwn-db-462df',
  storageBucket: 'crwn-db-462df.appspot.com',
  messagingSenderId: '154839247709',
  appId: '1:154839247709:web:047a66f18b456bf4d556b4',
  measurementId: 'G-7ZJ90CLC5R'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
