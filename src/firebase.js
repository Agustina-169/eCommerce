import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDL6rRiQgQfHkHgG9lNDCQnHzrGgSbfSCg",
  authDomain: "ecommerce-fa111.firebaseapp.com",
  projectId: "ecommerce-fa111",
  storageBucket: "ecommerce-fa111.appspot.com",
  messagingSenderId: "741249679097",
  appId: "1:741249679097:web:70c1e837e97cee5c652c28"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export {auth}

  