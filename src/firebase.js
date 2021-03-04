import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyAkxD7psSCUhxcM417pcDNq0hKe1NHX1y4",
    authDomain: "chat-b1687.firebaseapp.com",
    projectId: "chat-b1687",
    storageBucket: "chat-b1687.appspot.com",
    messagingSenderId: "230824056148",
    appId: "1:230824056148:web:c70f1c84490a817c41e4c1"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
