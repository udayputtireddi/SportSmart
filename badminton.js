// badminton.js

// Function to add item to the cart
function addToCart(item) {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex > -1) {
        // If the item exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If it's a new item, add it to the cart with quantity 1
        item.quantity = 1;
        cart.push(item);
    }
    
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the cart count display
    updateCartCount();
}

// Function to update the cart count display
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const itemElement = event.target.closest('.equipment-item');
        const item = {  
            name: itemElement.querySelector('h3').textContent,
            price: parseFloat(itemElement.querySelector('.price').textContent.replace('$', '')),
            image: itemElement.querySelector('img').src  // This line ensures the image URL is captured
        };
        addToCart(item);
        alert(`${item.name} has been added to the cart!`);
    });
});

// Initialize cart count from localStorage
document.addEventListener('DOMContentLoaded', updateCartCount);
