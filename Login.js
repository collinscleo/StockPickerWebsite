function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector('#linkcreateAccount').addEventListener("click", e => { 
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector('#linkLogin').addEventListener("click", e => { 
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (inputElement.id === "signupUsername" && inputElement.value.length > 0 && inputElement.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })
    });
});
// Function to save username and password to local storage
function saveCredentials(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Function to check if the entered username and password match with the stored ones
function verifyCredentials(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    return username === storedUsername && password === storedPassword;
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    // Event listener for clicking "Create Account" link
    document.querySelector('#linkcreateAccount').addEventListener("click", e => { 
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    // Event listener for clicking "Sign In" link
    document.querySelector('#linkLogin').addEventListener("click", e => { 
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    // Event listener for form submission (Login)
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const usernameInput = loginForm.querySelector("#loginUsername");
        const passwordInput = loginForm.querySelector("#loginPassword");

        // Verify credentials
        if (verifyCredentials(usernameInput.value, passwordInput.value)) {
            // Credentials are correct, perform further actions (e.g., redirect to main page)
            alert("Login successful!");
            // Here you can redirect to another page or perform any other action
        } else {
            // Credentials are incorrect, display error message
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    });

    // Event listener for form submission (Create Account)
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        const usernameInput = createAccountForm.querySelector("#signupUsername");
        const passwordInput = createAccountForm.querySelector("#signupPassword");

        // Save username and password to local storage
        saveCredentials(usernameInput.value, passwordInput.value);

        // Optionally, perform further actions (e.g., redirect to main page)
        alert("Account created successfully!");
        // Here you can redirect to another page or perform any other action
    });
});
