// soccer.js

// Sample cart array to store items
let cart = [];

// Function to add item to the cart
function addToCart(item) {
    // Add the item to the cart array
    cart.push(item);
    // Save the cart array to localStorage (so it persists across pages)
    localStorage.setItem('cart', JSON.stringify(cart));
    // Update the cart count or display
    updateCartCount();
}

// Function to update the cart count display
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const itemElement = event.target.closest('.equipment-item');
        const item = {
            name: itemElement.querySelector('h3').textContent,
            price: itemElement.querySelector('.price').textContent,
            image: itemElement.querySelector('img').src
        };
        addToCart(item);
    });
});

// Initialize cart from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartCount();
    }
});

<li><a href="cart.html">Cart (<span id="cart-count">0</span>)</a></li>
