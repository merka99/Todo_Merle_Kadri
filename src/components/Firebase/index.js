import app from 'firebase/app';
import React from 'react';

var firebaseConfig = {
    apiKey: "AIzaSyC2VhFeXZTQam2ULQV-TfzD7U_MvHHcktY",
    authDomain: "todo-e2f5a.firebaseapp.com",
    databaseURL: "https://todo-e2f5a.firebaseio.com",
    projectId: "todo-e2f5a",
    storageBucket: "todo-e2f5a.appspot.com",
    messagingSenderId: "446549627097",
    appId: "1:446549627097:web:b2423be8b1a09de9"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();

        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    // *** Auth API ***


    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);

    doSignOut = () => this.auth.signOut();

}

export default Firebase;