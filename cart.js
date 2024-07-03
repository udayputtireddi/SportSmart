document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image || 'default-image.png'}" alt="${item.name || 'Unknown Item'}">
                <div>
                    <h3>${item.name || 'Unknown Item'}</h3>
                    <p>Price: $${item.price || '0.00'}</p>
                    <p>Quantity: ${item.quantity || 1}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);

            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        totalItemsElement.textContent = totalItems;
        totalPriceElement.textContent = totalPrice.toFixed(2);
        cartCountElement.textContent = totalItems;

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = button.getAttribute('data-index');
                removeItemFromCart(index);
            });
        });
    }

    function removeItemFromCart(index) {
        if (index >= 0 && index < cart.length) {
            console.log(`Removing item at index ${index}:`, cart[index]);
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        } else {
            console.log('Invalid index for removal:', index);
        }
    }

    updateCart();
});







