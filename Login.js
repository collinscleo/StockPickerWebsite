function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

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
        const usernameInput = loginForm.querySelector(".form__input[placeholder='Username or Email']");
        const passwordInput = loginForm.querySelector(".form__input[placeholder='Password']");

        if (verifyCredentials(usernameInput.value, passwordInput.value)) {
            alert("Login successful!");
        } else {
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        const usernameInput = createAccountForm.querySelector(".form__input[placeholder='Username']");
        const emailInput = createAccountForm.querySelector(".form__input[placeholder='Email Address']");
        const passwordInput = createAccountForm.querySelector(".form__input[placeholder='Confirm password']");

        saveCredentials(usernameInput.value, passwordInput.value);
        alert("Account created successfully!");
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
