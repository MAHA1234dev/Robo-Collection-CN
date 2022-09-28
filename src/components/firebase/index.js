import React, { usestate, useeffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Firebase() {

    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCTDn9lhhYnrciFRX6pAShfTjVM_v0BxDw",
        authDomain: "local-react-dafe1.firebaseapp.com",
        projectId: "local-react-dafe1",
        storageBucket: "local-react-dafe1.appspot.com",
        messagingSenderId: "165708336324",
        appId: "1:165708336324:web:5743f08df47821f50a0d91"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    let email = 'mahadev@gmail.com'
    let password = 12345678
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential);
            // const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return (
        <div>
            sdnvdsb
        </div>
    )
}
export default Firebase