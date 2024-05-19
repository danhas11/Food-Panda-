document.addEventListener('DOMContentLoaded', function () {
    const customerSignUpForm = document.getElementById('customerSignUpForm');

    customerSignUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const customerName = document.getElementById('customerName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Store customer data in local storage
        localStorage.setItem('customerName', customerName);
        localStorage.setItem('customerEmail', email);
        localStorage.setItem('customerPassword', password);

        alert("Sign up successful!");
        window.location.href = "customer-login.html"; // Redirect to login page
    });
});

