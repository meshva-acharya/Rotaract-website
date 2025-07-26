// auth.js
import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

// Signup
document.getElementById("signup-btn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("Signup successful");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
});

// Login
document.getElementById("login-btn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("Login successful");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
});