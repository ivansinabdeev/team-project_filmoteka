// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   deleteUser,
//   signOut,
//   updateProfile,
//   updateEmail,
//   updatePassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { getDatabase, ref, set, remove } from 'firebase/database';

// const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyCgToNucW8dLrOioz7mOtUOoesK_26M4AI',
//   authDomain: 'filmoteka-1e200.firebaseapp.com',
//   projectId: 'filmoteka-1e200',
//   storageBucket: 'filmoteka-1e200.appspot.com',
//   messagingSenderId: '719697931279',
//   appId: '1:719697931279:web:78527c3fbcb579f130077a',
//   //   measurementId: 'G-F677W6H27R',
// });

// // const app = initializeApp(FIREBASECFG);
// const db = getDatabase(firebaseApp);
// const auth = getAuth(firebaseApp);

// default class User {
//     constructor(userData) {
//         this.userData = userData;
//     }

//     create() {
//         createUserWithEmailAndPassword(auth, this.userData.email, this.userData.password)
//             .then(userCredential => {
//                 const user = userCredential.user;

//                 set(ref(db, 'users/' + user.uid + '/auth/'), this.userData);

//                 updateProfile(auth.currentUser, {
//                     displayName: `${this.userData.name}`,
//                 });

//                 alert(`User ${this.userData.name} created`);

//                 signOut(auth).then(() => {
//                     refs.userLibrary.classList.add('hidden-tab');
//                 });
//             })
//             .catch(error => {
//                 alert(error.code);
//             });
//     }
// }

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('Logged in!');
  } else {
    console.log('No user');
  }
});
