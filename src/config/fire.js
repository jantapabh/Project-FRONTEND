import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCbtxpjI4-4yvfGl04rsRIujMrOs7wVsvg",
    authDomain: "prepar-project.firebaseapp.com",
    databaseURL: "https://prepar-project.firebaseio.com",
    projectId: "prepar-project",
    storageBucket: "prepar-project.appspot.com",
    messagingSenderId: "109478906982",
    appId: "1:109478906982:web:9263fd45d8870f3411b1a7",
    measurementId: "G-0H2LCE6H2T"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;

