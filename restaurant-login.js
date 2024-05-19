document.addEventListener('DOMContentLoaded', function () {
    const restaurantLoginForm = document.getElementById('restaurantLoginForm');

    restaurantLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve restaurant owner data from local storage
        const storedEmail = localStorage.getItem('restaurantEmail');
        const storedPassword = localStorage.getItem('restaurantPassword');

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            window.location.href = "restaurant-dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password");
        }
    });
});
