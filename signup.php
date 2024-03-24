<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = $_POST["password"];
    
    // Validate form data
    $errors = [];
    if (empty($username)) {
        $errors[] = "Username is required";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email address is required";
    }
    if (empty($password)) {
        $errors[] = "Password is required";
    }
    
    // If there are no validation errors, proceed with sign-up process
    if (empty($errors)) {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // You can perform database operations here to store user information
        // For demonstration purposes, we'll just print the data
        echo "Sign up successful!<br>";
        echo "Username: " . $username . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Hashed Password: " . $hashed_password . "<br>";
    } else {
        // Display validation errors
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>
