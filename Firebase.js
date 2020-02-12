
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAJqIMWjBzzfpsfIn2PKUtxJkAGkLE1p5g",
    authDomain: "projeto-upa.firebaseapp.com",
    databaseURL: "https://projeto-upa.firebaseio.com",
    projectId: "projeto-upa",
    storageBucket: "projeto-upa.appspot.com",
    messagingSenderId: "727465036537",
    appId: "1:727465036537:web:2e7ab47f2762434abf7028"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

// Dados de conexão com o Servidor Google 