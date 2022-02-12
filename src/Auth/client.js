import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJE3W5fpi4Wr3perBe_WLQ-AjnEX_ilJU',
  authDomain: 'fashionlike-app.firebaseapp.com',
  projectId: 'fashionlike-app',
  storageBucket: 'fashionlike-app.appspot.com',
  messagingSenderId: '285999993675',
  appId: '1:285999993675:web:1bc4b6cb7e22eb593bcece',
  measurementId: 'G-QTHM39S66N'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const onAuthStateChanged = (callback) => {
  return firebase.auth().onAuthStateChanged(callback)
}

export const loginWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}
