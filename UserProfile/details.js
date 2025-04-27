// Load saved data if available
document.addEventListener('DOMContentLoaded', function() {
    const savedFname = localStorage.getItem('fname');
    const savedLname = localStorage.getItem('lname');
    const savedEmail = localStorage.getItem('email');
    const savedUsername = localStorage.getItem('username');
    const savedBio = localStorage.getItem('bio');
    const savedProfilePic = localStorage.getItem('profilePic');
    
    if (savedFname) document.getElementById('fname').value = savedFname;
    if (savedLname) document.getElementById('lname').value = savedLname;
    if (savedEmail) document.getElementById('email').value = savedEmail;
    if (savedUsername) document.getElementById('username').value = savedUsername;
    if (savedBio) {
        document.getElementById('bio').value = savedBio;
        document.getElementById('charCount').textContent = savedBio.length;
    }
    if (savedProfilePic) {
        document.getElementById('profilePicPreview').style.backgroundImage = `url(${savedProfilePic})`;
    }
});

// Bio character counter
document.getElementById('bio').addEventListener('input', function() {
    const charCount = this.value.length;
    document.getElementById('charCount').textContent = charCount;
});

// Profile picture upload
document.getElementById('profilePic').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileName = file.name;
        document.getElementById('uploadFilename').textContent = fileName;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePicPreview').style.backgroundImage = `url(${e.target.result})`;
            // Save to localStorage as data URL
            localStorage.setItem('profilePic', e.target.result);
        }
        reader.readAsDataURL(file);
    } else {
        document.getElementById('uploadFilename').textContent = 'No file chosen';
    }
});

// Password Reset Functionality
document.getElementById("resetPassword").addEventListener("click", function() {
    const userEmail = document.getElementById("email").value;
    
    if (!userEmail) {
        alert("Please enter your email first!");
        return;
    }
    
    if (!userEmail.includes("@") || !userEmail.includes(".")) {
        alert("Please enter a valid email address!");
        return;
    }
    
    const verificationCode = prompt("We've sent a 6-digit code to your email.\nFor this demo, use code: 123456\nEnter the code here:");
    
    if (verificationCode === "123456") {
        document.getElementById("newPassword").style.display = "block";
        document.getElementById("confirmPassword").style.display = "block";
        alert("Verification successful! You can now set a new password.");
    } else {
        alert("Wrong verification code. Please try again.");
    }
});

// Clear Details
document.getElementById("clearDetails").addEventListener("click", function() {
    if (confirm("Are you sure you want to clear all details?")) {
        document.getElementById("detailsForm").reset();
        document.getElementById("uploadFilename").textContent = "No file chosen";
        document.getElementById("profilePicPreview").style.backgroundImage = "";
        document.getElementById("charCount").textContent = "0";
        localStorage.removeItem('profilePic');
    }
});

// Form Submission
document.getElementById("detailsForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (newPassword && newPassword !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;

    localStorage.setItem("fname", firstName);
    localStorage.setItem("lname", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("bio", bio);
    
    if (newPassword) {
        localStorage.setItem("password", newPassword);
    }

    // Check if a new profile picture was uploaded
    const profilePicInput = document.getElementById('profilePic');
    if (profilePicInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('profilePic', e.target.result);
            window.location.href = "profile.html";
        }
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        window.location.href = "profile.html";
    }
});