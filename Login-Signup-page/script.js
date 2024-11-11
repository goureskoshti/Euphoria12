// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs3A8rJiYn3pZ5EYZgnYVMp5IkSTHTV5A",
  authDomain: "mydb-8fb25.firebaseapp.com",
  projectId: "mydb-8fb25",
  storageBucket: "mydb-8fb25.appspot.com",
  messagingSenderId: "38910713574",
  appId: "1:38910713574:web:d5f763a16694822e336527",
  databaseURL: "https://mydb-8fb25-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// DOM Elements
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");

// Signup function
createacctbtn.addEventListener("click", function() {
  const name = document.getElementById("name-signup").value;
  const enrollment = document.getElementById("enrollment-signup").value;
  const mobile = document.getElementById("mobile-signup").value;
  const year = document.getElementById("year-signup").value;
  const course = document.getElementById("course-signup").value;
  const email = document.getElementById("email-signup").value;
  const password = document.getElementById("password-signup").value;
  const confirmPassword = document.getElementById("confirm-password-signup").value;

  if (password !== confirmPassword) {
    window.alert("Password fields do not match. Try again.");
    return;
  }

  if (!name || !enrollment || !mobile || !year || !course || !email || !password) {
    window.alert("Please fill out all required fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, 'Insider/' + user.uid), {
        name: name,
        enrollment: enrollment,
        mobile: mobile,
        year: year,
        course: course,
        email: email
      });
      window.alert("Success! Account created.");
      main.style.display = "block";
      createacct.style.display = "none";
    })
    .catch((error) => {
      console.error("Error during account creation:", error);
      window.alert("Error occurred. Try again.");
    });
});

// Login function
submitButton.addEventListener("click", function() {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");
      window.location = '../Booking-Page/home.html';  // Redirect to the booking page
    })
    .catch((error) => {
      console.error("Login error:", error);
      window.alert("Error occurred. Try again.");
    });
});

// Show signup form
signupButton.addEventListener("click", function() {
  main.style.display = "none";
  createacct.style.display = "block";
});

// Return to login form
returnBtn.addEventListener("click", function() {
  main.style.display = "block";
  createacct.style.display = "none";
});

