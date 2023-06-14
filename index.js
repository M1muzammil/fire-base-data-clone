import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Rest of your code...

const firebaseConfig = {
apiKey: "AIzaSyBhvsqI2q3zy8ReGyKsgAU1G_9RoNur1sw",
authDomain: "classpractice-0.firebaseapp.com",
projectId: "classpractice-0",
storageBucket: "classpractice-0.appspot.com",
messagingSenderId: "812983536200",
appId: "1:812983536200:web:4c3f9b0d0a17ed3f88267d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let register_btn = document.getElementById("registerd");
register_btn.addEventListener("click", function () {
let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
console.log("user==>",user)
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode, errorMessage);
});

});





