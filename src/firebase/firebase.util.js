import  firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = 
    {
        apiKey: "AIzaSyDq8fambX8oxCl3xxDv63D3EoO4rUcsEks",
        authDomain: "crwn-db-354b4.firebaseapp.com",
        projectId: "crwn-db-354b4",
        storageBucket: "crwn-db-354b4.appspot.com",
        messagingSenderId: "770786843814",
        appId: "1:770786843814:web:65096d3bf62d77fc15e867",
        measurementId: "G-5GQJCPFNMD"
    };
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase