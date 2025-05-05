// Check if user is logged in on page load
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // User is logged in
        document.getElementById("loginSignup").style.display = "none";
        document.getElementById("addPasteLink").style.display = "inline-block";
        document.getElementById("logoutBtn").style.display = "inline-block";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("add-paste").style.display = "block";
    } else {
        // User is not logged in
        document.getElementById("loginSignup").style.display = "inline-block";
        document.getElementById("addPasteLink").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
    }
});

// Toggle between Login and Signup Forms
function toggleLogin() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("signupLink").style.display = "inline";
}

function toggleSignup() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginLink").style.display = "inline";
    document.getElementById("signupLink").style.display = "none";
}

// Handle login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        // Store the login credentials in localStorage
        localStorage.setItem("loggedInUser", username);
        
        // Show Add Paste page and hide login
        window.location.reload();
    }
});

// Handle signup
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    
    if (newUsername && newPassword) {
        alert("Account Created! Please Log In.");
        toggleLogin();
    }
});

// Logout functionality
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
}
