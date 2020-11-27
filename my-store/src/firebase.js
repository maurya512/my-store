// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCXvFuvBUxgahVsURKACXGuy9n35GmiCj4",
    authDomain: "my-store-ce964.firebaseapp.com",
    databaseURL: "https://my-store-ce964.firebaseio.com",
    projectId: "my-store-ce964",
    storageBucket: "my-store-ce964.appspot.com",
    messagingSenderId: "796436775552",
    appId: "1:796436775552:web:24ab0dcc0e627f6e755c65",
    measurementId: "G-V6HRYNVDJ2"
  };  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};