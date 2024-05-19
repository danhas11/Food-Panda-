// This script is optional for the index.html file
// It's included to demonstrate additional functionality if needed

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.button');

    options.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const optionText = option.innerText.toLowerCase();

            if (optionText.includes("restaurant")) {
                window.location.href = "restaurant-signup.html";
            } else if (optionText.includes("customer")) {
                window.location.href = "customer-signup.html";
            } else {
                alert("Invalid option");
            }
        });
    });
});
