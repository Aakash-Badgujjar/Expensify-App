import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp();

  const database=firebase.database();
 

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider, database as default};


//   database.ref('expenses').on('child_remove',(snapshot) => {
//      console.log(snapshot.key,snapshot.val());
//   });
//   database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
//  });
//  database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
//  });
//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [0];

//     snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id:childSnapshot.key,
//            ...childSnapshot.val()
//        });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses')
// .on('value',(snapshot) => {
//   const expenses = [0];

//   snapshot.forEach((childSnapshot) => {
//      expenses.push({
//          id:childSnapshot.key,
//          ...childSnapshot.val()
//      });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//     description:'Rent',
//     note:'',
//     amount:109500,
//     createdAt:898787657654
// });


// database.ref('expenses').push({
//     description:'Phone bill',
//     note:'',
//     amount:5900,
//     createdAt:8987876576547
// });


// database.ref('expenses').push({
//     description:'Food',
//     note:'',
//     amount:1200,
//     createdAt:854787657654
// });



//   database.ref('notes/-MA7C86v0TlIBw-fdMlg').remove();

//   database.ref('notes').push({
//           title:'To Do',
//           body:'Go for a run'
//   });

//   const firebaseNotes = {
//       notes:{
//           abdviper:{
//             title:'First note!',
//             body:'This is my note'  
//           },
//           viperabd:{
//             title:'Another note!',
//             body:'This is my note'
//           }
//       }
//   };

//   const notes =[{
//       id:'12',
//       title:'First note!',
//       body:'This is my note'
//   },{
//     id:'76',
//     title:'Another note!',
//     body:'This is my note'
//   }];

//   database.ref('notes').set(notes);
//   database.ref('notes/12')

//   database.ref().on('value',(snapshot) => {
//          const val = snapshot.val();
//          console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });

   

//   const onValueChange = database.ref().on('value',(snapshot) => {

//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching',e)
//   });

// setTimeout(() => {
//     database.ref('age').set(29);
// },3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// },7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// },10500);


//   database.ref()
//   .once('value')
//   .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
//   })
//   .catch((e) => {
//      console.log('Error fetchind data',e);
//   });

//   database.ref().set({
//         name:'viper',
//         age:22,
//         stressLevel:6,
//         job:{
//             title:'Software developer',
//             company:'Google'
//         },
//         location:{
//             city:'new delhi',
//             country:'India'
//         }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed.',e);
//   });

//   database.ref().set('This is my database');

// database.ref('age').set(23);
// database.ref('location/city').set('Delhi');
// database.ref('attributes').set({
//     height:73,
//     weight:150
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Things didnt for the second error',e);
// });

// database.ref('isSingle').remove().then(() => {
// console.log('Data was removed');
// }).catch((e) => {
// console.log('Did not remove data',e);
// });

// database.ref('isSingle').set(null);

// database.ref().update({
//  stressLevel:9,
//  'job/company':'Amazon',
//  'location/city':'Seattle'
   
// });