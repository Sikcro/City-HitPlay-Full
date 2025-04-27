// Retrieve data from localStorage
const savedUsername = localStorage.getItem("username");
const savedBio = localStorage.getItem("bio");
const savedProfilePic = localStorage.getItem("profilePic");

// Display data on the profile page
if (savedUsername) {
    document.getElementById("usernameDisplay").textContent = savedUsername;
}
if (savedBio) {
    document.getElementById("bioDisplay").textContent = savedBio;
}
if (savedProfilePic) {
    document.getElementById("profilePicDisplay").src = savedProfilePic;
} else {
    document.getElementById("profilePicDisplay").src = "images/p.svg";
}

// Dropdown menu functionality
document.getElementById("dropdownMenu").addEventListener("click", function() {
    document.getElementById("dropdownContent").classList.toggle("show");
});

// Close the dropdown if clicked outside
window.addEventListener("click", function(event) {
    if (!event.target.matches('.menu-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});


