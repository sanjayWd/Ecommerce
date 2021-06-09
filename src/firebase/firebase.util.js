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

export const CreateUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return

 const userRef = firestore.doc(`users/${userAuth.uid}`)
 const snapShot = await userRef.get()

 if(!snapShot.exists){
     const{displayName,email}=userAuth;
     const createdAt=new Date();

     try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData 
        })
     }catch(error){
        console.log('error creating user',error.message);
     }
 }
return userRef
} 


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase