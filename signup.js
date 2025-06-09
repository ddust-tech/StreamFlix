// Replace these with your actual Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const password = document.getElementById("password");
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  this.textContent = type === "password" ? "👁️" : "🙈";
});

// Sign Up Logic
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  // Clear previous error
  errorBox.textContent = "";

  // Basic Validation
  if (!email || !password) {
    errorBox.textContent = "Please fill in all fields.";
    return;
  }

  // Firebase Sign-Up
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful sign-up
      alert("Account created successfully!");
      window.location.href = "signin.html";
    })
    .catch((error) => {
      // Show Firebase error message
      errorBox.textContent = error.message;
    });
});
