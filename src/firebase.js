import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

export const appFirebase = firebase.initializeApp({
    apiKey: "AIzaSyALb23wy6-6bPYX-n4TgAXmpRLXr8IGeXY",
    authDomain: "teamxearth-dc972.firebaseapp.com",
    projectId: "teamxearth-dc972",
    storageBucket: "teamxearth-dc972.appspot.com",
    messagingSenderId: "233437481201",
    appId: "1:233437481201:web:99fcadb0963e6238334150"
})

export const auth = appFirebase.auth()

/*
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
*/