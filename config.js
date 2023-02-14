import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyDE0UIiDBi02bpq2ISa4zS0fghzG-of1ow",
  authDomain: "projeto67-65243.firebaseapp.com",
  projectId: "projeto67-65243",
  storageBucket: "projeto67-65243.appspot.com",
  messagingSenderId: "993003702139",
  appId: "1:993003702139:web:6201e84f277fa7944f5fde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
