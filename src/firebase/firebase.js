import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID:process.env.FIREBASE_APP_ID,
FIREBASE_MEASUREMENT_ID:process.env.FIREBASE_MEASURENMENT_ID
};
  process.env.FIREBASE_CONFIG = JSON.stringify(firebaseConfig);
  
  

  firebase.initializeApp(firebaseConfig);

  const database=firebase.database();
 

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider, database as default};
