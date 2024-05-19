document.addEventListener('DOMContentLoaded', function () {
    const restaurantList = document.getElementById('restaurantList');
    const menuList = document.getElementById('menuList');
    const cartItemsList = document.getElementById('cartItems');
    const totalAmountSpan = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const clearCartBtn = document.createElement('button'); // Create Clear Cart button

    clearCartBtn.textContent = 'Clear Cart'; // Set button text
    document.getElementById('cart').appendChild(clearCartBtn); // Append Clear Cart button to cart section

    let restaurants = JSON.parse(localStorage.getItem('RestaurantUsersData')) || [];
    let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function saveToLocalStorage() {
        localStorage.setItem('menuItems', JSON.stringify(menuItems));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function displayMenu() {
        menuList.innerHTML = '';
        menuItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${item.name}</strong> - ${item.category} - $${item.price} 
                <button class="buyBtn" data-id="${item.id}">Buy</button>
            `;
            menuList.appendChild(li);
        });
    }

    function displayCart() {
        cartItemsList.innerHTML = '';
        let totalAmount = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
            totalAmount += item.price;
        });
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }

    displayMenu();
    displayCart();

    menuList.addEventListener('click', function (e) {
        if (e.target.classList.contains('buyBtn')) {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            const selectedItem = menuItems.find(item => item.id === itemId);
            cartItems.push(selectedItem);
            saveToLocalStorage();
            displayCart();
        }
    });

    // Event listener for Clear Cart button
    clearCartBtn.addEventListener('click', function () {
        cartItems = []; // Clear cart items
        saveToLocalStorage();
        displayCart(); // Update displayed cart items
    });

    checkoutBtn.addEventListener('click', function () {
        alert('Proceeding to checkout');
        location.href = 'customercheckout.html';
        // Implement checkout process if needed
    });

    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('customerId');
        window.location.href = 'customer-login.html';
    });
});




