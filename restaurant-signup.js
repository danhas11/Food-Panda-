document.addEventListener('DOMContentLoaded', function () {
    const restaurantSignUpForm = document.getElementById('restaurantSignUpForm');

    restaurantSignUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const restaurantName = document.getElementById('restaurantName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Store restaurant owner data in local storage
        localStorage.setItem('restaurantName', restaurantName);
        localStorage.setItem('restaurantEmail', email);
        localStorage.setItem('restaurantPassword', password);

        alert("Sign up successful!");
        window.location.href = "restaurant-login.html"; // Redirect to login page
    });
});
