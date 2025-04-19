// Retrieve data from localStorage
const savedUsername = localStorage.getItem("username");
const savedBio = localStorage.getItem("bio");

// Display data on the profile page
if (savedUsername) {
    document.getElementById("usernameDisplay").textContent = savedUsername;
}
if (savedBio) {
    document.getElementById("bioDisplay").textContent = savedBio;
}


