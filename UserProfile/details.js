document.getElementById("detailsForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;

    // Save to localStorage
    localStorage.setItem("fname", firstName);
    localStorage.setItem("lname", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("bio", bio);

    // Redirect to profile page
    window.location.href = "profile.html";
});

// Clear Details Button Functionality
document.getElementById("clearDetails").addEventListener("click", function () {
    // Clear all inputs
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("bio").value = "";
    document.getElementById("profilePic").value = "";

    // Remove data from localStorage
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("bio");

    // Optionally reset placeholders (if needed)
    alert("Details have been cleared!");
});







//document.getElementById("detailsForm").addEventListener("submit", function (e) {
//   e.preventDefault();

    // Get input values
//    const firstName = document.getElementById("fname").value;
//    const lastName = document.getElementById("lname").value;
//    const email = document.getElementById("email").value;
//    const username = document.getElementById("username").value;
//    const bio = document.getElementById("bio").value;

    // Save to localStorage
//    localStorage.setItem("fname", firstName);
//    localStorage.setItem("lname", lastName);
//    localStorage.setItem("email", email);
//    localStorage.setItem("username", username);
//    localStorage.setItem("bio", bio);

    // Redirect to profile page
//    window.location.href = "profile.html";
//});

