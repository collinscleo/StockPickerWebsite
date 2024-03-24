document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    
    var errors = [];
    if (username === "") {
        errors.push("Username is required");
    }
    if (email === "" || !validateEmail(email)) {
        errors.push("Valid email address is required");
    }
    if (password === "") {
        errors.push("Password is required");
    }
    
    if (errors.length === 0) {
        // You can process the form data here (e.g., send it to a server via AJAX)
        // For demonstration purposes, let's just log the data to the console
        console.log("Sign up successful!");
        console.log("Username: " + username);
        console.log("Email: " + email);
        console.log("Password: " + password);
    } else {
        // Display validation errors
        errors.forEach(function(error) {
            console.error(error);
        });
    }
});

function validateEmail(email) {
    // Simple email validation using a regular expression
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
