// Your Firebase project credentials
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const password = document.getElementById("password");
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  this.textContent = type === "password" ? "👁️" : "🙈";
});

// Sign In Logic
document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  // Clear old errors
  errorBox.textContent = "";

  // Basic validation
  if (!email || !password) {
    errorBox.textContent = "Please enter your email and password.";
    return;
  }

  // Firebase Sign-In
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Replace with your homepage
    })
    .catch((error) => {
      errorBox.textContent = error.message;
    });
});
