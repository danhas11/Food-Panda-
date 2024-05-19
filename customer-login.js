document.addEventListener('DOMContentLoaded', function () {
    const customerLoginForm = document.getElementById('customerLoginForm');

    customerLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve customer data from local storage
        const storedEmail = localStorage.getItem('customerEmail');
        const storedPassword = localStorage.getItem('customerPassword');

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            window.location.href = "customer-dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password");
        }
    });
});
