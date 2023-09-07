// index.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('LoginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the values of the username and password fields
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            // Display an error message if the fields are empty
            errorMessage.textContent = 'Username and password are required.';
            errorMessage.style.color = '#ff2770'; // Set error message color
        } else {
            // Simulate a simple authentication logic
            if (username === '' && password === '') {
                // Replace 'yourusername' and 'yourpassword' with your actual credentials
                errorMessage.textContent = 'Login successful.';
                errorMessage.style.color = '#45f3ff'; // Set success message color
            } else {
                // Display an error message for incorrect credentials
                errorMessage.textContent = 'Invalid username or password.';
                errorMessage.style.color = '#ff2770'; // Set error message color
            }
        }
    });
});
