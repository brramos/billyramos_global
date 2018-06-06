import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDOEm_mw1CMDyettkSoWOdYBvrSpCuLxM4',
  authDomain: 'portfolio-d917c.firebaseapp.com',
  databaseURL: 'https://portfolio-d917c.firebaseio.com',
  projectId: 'portfolio-d917c',
  storageBucket: 'portfolio-d917c.appspot.com',
  messagingSenderId: '349413820719'
}
firebase.initializeApp(config)

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
