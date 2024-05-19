document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.getElementById('menuList');
    const addDishBtn = document.getElementById('addDishBtn');
    const categoryName = document.getElementById('categoryName');
    const addCategoryBtn = document.getElementById('addCategoryBtn');
    const categoryList = document.getElementById('categoryList');
    const logoutBtn = document.getElementById('logoutBtn');

    let categories = JSON.parse(localStorage.getItem('categories')) || ['Starters', 'Main Course', 'Desserts'];
    let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

    function saveToLocalStorage() {
        localStorage.setItem('categories', JSON.stringify(categories));
        localStorage.setItem('menuItems', JSON.stringify(menuItems));
    }

    function displayCategories() {
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            categoryList.appendChild(li);
        });
    }

    function displayMenu() {
        menuList.innerHTML = '';
        menuItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'menuItemCard';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.category} - $${item.price}</p>
                <p>${item.description}</p>
                <button class="editBtn" data-id="${item.id}">Edit</button>
                <button class="deleteBtn" data-id="${item.id}">Delete</button>
            `;
            menuList.appendChild(div);
        });
    }

    displayCategories();
    displayMenu();

    addCategoryBtn.addEventListener('click', function () {
        const newCategory = categoryName.value.trim();
        if (newCategory) {
            categories.push(newCategory);
            saveToLocalStorage();
            displayCategories();
            categoryName.value = '';
        } else {
            alert('Please enter a valid category name.');
        }
    });

    addDishBtn.addEventListener('click', function () {
        const dishName = document.getElementById('dishName').value.trim();
        const dishCategory = document.getElementById('dishCategory').value.trim();
        const dishPrice = parseFloat(document.getElementById('dishPrice').value);
        const dishDescription = document.getElementById('dishDescription').value.trim();
        const dishImage = document.getElementById('dishImage').value.trim();

        if (dishName && dishCategory && !isNaN(dishPrice) && dishDescription && dishImage) {
            const newItem = { id: Date.now(), name: dishName, category: dishCategory, price: dishPrice, description: dishDescription, image: dishImage };
            menuItems.push(newItem);
            saveToLocalStorage();
            displayMenu();
            document.getElementById('dishName').value = '';
            document.getElementById('dishCategory').value = '';
            document.getElementById('dishPrice').value = '';
            document.getElementById('dishDescription').value = '';
            document.getElementById('dishImage').value = '';
        } else {
            alert('Please fill all the fields correctly.');
        }
    });

    menuList.addEventListener('click', function (e) {
        const itemId = parseInt(e.target.getAttribute('data-id'));

        if (e.target.classList.contains('deleteBtn')) {
            menuItems = menuItems.filter(item => item.id !== itemId);
            saveToLocalStorage();
            displayMenu();
        } else if (e.target.classList.contains('editBtn')) {
            const item = menuItems.find(item => item.id === itemId);

            const newName = prompt('Enter new name:', item.name);
            const newCategory = prompt('Enter new category:', item.category);
            const newPrice = parseFloat(prompt('Enter new price:', item.price));
            const newDescription = prompt('Enter new description:', item.description);
            const newImage = prompt('Enter new image URL:', item.image);

            if (newName && newCategory && !isNaN(newPrice) && newDescription && newImage) {
                item.name = newName;
                item.category = newCategory;
                item.price = newPrice;
                item.description = newDescription;
                item.image = newImage;
                saveToLocalStorage();
                displayMenu();
            } else {
                alert('Please fill all the fields correctly.');
            }
        }
    });

    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('restaurantOwnerId');
        window.location.href = 'restaurant-login.html';
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     const menuList = document.getElementById('menuList');
//     const addDishBtn = document.getElementById('addDishBtn');
//     const categoryName = document.getElementById('categoryName');
//     const addCategoryBtn = document.getElementById('addCategoryBtn');
//     const categoryList = document.getElementById('categoryList');
//     const logoutBtn = document.getElementById('logoutBtn');

//     let categories = JSON.parse(localStorage.getItem('categories')) || ['Starters', 'Main Course', 'Desserts'];
//     let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

//     function saveToLocalStorage() {
//         localStorage.setItem('categories', JSON.stringify(categories));
//         localStorage.setItem('menuItems', JSON.stringify(menuItems));
//     }

//     function displayCategories() {
//         categoryList.innerHTML = '';
//         categories.forEach(category => {
//             const li = document.createElement('li');
//             li.textContent = category;
//             categoryList.appendChild(li);
//         });
//     }

//     function displayMenu() {
//         menuList.innerHTML = '';
//         menuItems.forEach(item => {
//             const div = document.createElement('div');
//             div.className = 'menuItemCard';
//             div.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}">
//                 <h3>${item.name}</h3>
//                 <p>${item.category} - $${item.price}</p>
//                 <p>${item.description}</p>
//                 <button class="deleteBtn" data-id="${item.id}">Delete</button>
//             `;
//             menuList.appendChild(div);
//         });
//     }

//     displayCategories();
//     displayMenu();

//     addCategoryBtn.addEventListener('click', function () {
//         const newCategory = categoryName.value.trim();
//         if (newCategory) {
//             categories.push(newCategory);
//             saveToLocalStorage();
//             displayCategories();
//             categoryName.value = '';
//         } else {
//             alert('Please enter a valid category name.');
//         }
//     });

//     addDishBtn.addEventListener('click', function () {
//         const dishName = document.getElementById('dishName').value.trim();
//         const dishCategory = document.getElementById('dishCategory').value.trim();
//         const dishPrice = parseFloat(document.getElementById('dishPrice').value);
//         const dishDescription = document.getElementById('dishDescription').value.trim();
//         const dishImage = document.getElementById('dishImage').value.trim();

//         if (dishName && dishCategory && !isNaN(dishPrice) && dishDescription && dishImage) {
//             const newItem = { id: Date.now(), name: dishName, category: dishCategory, price: dishPrice, description: dishDescription, image: dishImage };
//             menuItems.push(newItem);
//             saveToLocalStorage();
//             displayMenu();
//             document.getElementById('dishName').value = '';
//             document.getElementById('dishCategory').value = '';
//             document.getElementById('dishPrice').value = '';
//             document.getElementById('dishDescription').value = '';
//             document.getElementById('dishImage').value = '';
//         } else {
//             alert('Please fill all the fields correctly.');
//         }
//     });

//     menuList.addEventListener('click', function (e) {
//         if (e.target.classList.contains('deleteBtn')) {
//             const itemId = parseInt(e.target.getAttribute('data-id'));
//             menuItems = menuItems.filter(item => item.id !== itemId);
//             saveToLocalStorage();
//             displayMenu();
//         }
//     });

//     logoutBtn.addEventListener('click', function () {
//         localStorage.removeItem('restaurantOwnerId');
//         window.location.href = 'restaurant-login.html';
//     });
// });



// document.addEventListener('DOMContentLoaded', function () {
//     const menuList = document.getElementById('menuList');
//     const addDishBtn = document.getElementById('addDishBtn');
//     const categoryName = document.getElementById('categoryName');
//     const addCategoryBtn = document.getElementById('addCategoryBtn');
//     const categoryList = document.getElementById('categoryList');
//     const cartList = document.getElementById('cartList');
//     const checkoutBtn = document.getElementById('checkoutBtn');
//     const logoutBtn = document.getElementById('logoutBtn');
//     const clearCartBtn = document.getElementById('clearCartBtn'); // Get the clear cart button

//     let categories = JSON.parse(localStorage.getItem('categories')) || ['Starters', 'Main Course', 'Desserts'];
//     let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//     function saveToLocalStorage() {
//         localStorage.setItem('categories', JSON.stringify(categories));
//         localStorage.setItem('menuItems', JSON.stringify(menuItems));
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }

//     function displayCategories() {
//         categoryList.innerHTML = '';
//         categories.forEach(category => {
//             const li = document.createElement('li');
//             li.textContent = category;
//             categoryList.appendChild(li);
//         });
//     }

//     function displayMenu() {
//         menuList.innerHTML = '';
//         menuItems.forEach(item => {
//             const div = document.createElement('div');
//             div.className = 'menuItemCard';
//             div.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}">
//                 <h3>${item.name}</h3>
//                 <p>${item.category} - $${item.price}</p>
//                 <p>${item.description}</p>
//                 <button class="buyBtn" data-id="${item.id}">Buy</button>
//                 <button class="deleteBtn" data-id="${item.id}">Delete</button>
//             `;
//             menuList.appendChild(div);
//         });
//     }

//     function displayCart() {
//         cartList.innerHTML = '';
//         cartItems.forEach(item => {
//             const div = document.createElement('div');
//             div.className = 'cartItemCard';
//             div.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}" style="width: 50px;">
//                 <h3>${item.name}</h3>
//                 <p>${item.category} - $${item.price}</p>
//                 <p>${item.description}</p>
//             `;
//             cartList.appendChild(div);
//         });
//     }

//     displayCategories();
//     displayMenu();
//     displayCart();

//     addCategoryBtn.addEventListener('click', function () {
//         const newCategory = categoryName.value.trim();
//         if (newCategory) {
//             categories.push(newCategory);
//             saveToLocalStorage();
//             displayCategories();
//             categoryName.value = '';
//         } else {
//             alert('Please enter a valid category name.');
//         }
//     });

//     addDishBtn.addEventListener('click', function () {
//         const dishName = document.getElementById('dishName').value.trim();
//         const dishCategory = document.getElementById('dishCategory').value.trim();
//         const dishPrice = parseFloat(document.getElementById('dishPrice').value);
//         const dishDescription = document.getElementById('dishDescription').value.trim();
//         const dishImage = document.getElementById('dishImage').value.trim();

//         if (dishName && dishCategory && !isNaN(dishPrice) && dishDescription && dishImage) {
//             const newItem = { id: Date.now(), name: dishName, category: dishCategory, price: dishPrice, description: dishDescription, image: dishImage };
//             menuItems.push(newItem);
//             saveToLocalStorage();
//             displayMenu();
//             document.getElementById('dishName').value = '';
//             document.getElementById('dishCategory').value = '';
//             document.getElementById('dishPrice').value = '';
//             document.getElementById('dishDescription').value = '';
//             document.getElementById('dishImage').value = '';
//         } else {
//             alert('Please fill all the fields correctly.');
//         }
//     });

//     menuList.addEventListener('click', function (e) {
//         if (e.target.classList.contains('deleteBtn')) {
//             const itemId = parseInt(e.target.getAttribute('data-id'));
//             menuItems = menuItems.filter(item => item.id !== itemId);
//             saveToLocalStorage();
//             displayMenu();
//         } else if (e.target.classList.contains('buyBtn')) {
//             const itemId = parseInt(e.target.getAttribute('data-id'));
//             const item = menuItems.find(item => item.id === itemId);
//             cartItems.push(item);
//             saveToLocalStorage();
//             displayCart();
//             // Scroll to the cart section
//             document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
//         }
//     });

//     // Event listener for Clear Cart button
//     clearCartBtn.addEventListener('click', function () {
//         cartItems = []; // Clear cart items
//         localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
//         displayCart(); // Update displayed cart items
//     });

//     logoutBtn.addEventListener('click', function () {
//         localStorage.removeItem('restaurantOwnerId');
//         window.location.href = 'restaurant-login.html';
//     });

//     checkoutBtn.addEventListener('click', function () {
//         alert('Proceeding to checkout');
//         location.href = "checkout.html"
//         // Here you can implement the checkout process
//     });
// });
