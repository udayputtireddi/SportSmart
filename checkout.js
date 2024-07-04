document.addEventListener('DOMContentLoaded', () => {
    const checkoutItemsContainer = document.querySelector('.checkout-items');
    const checkoutForm = document.getElementById('checkout-form');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCheckoutItems() {
        checkoutItemsContainer.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            const checkoutItem = document.createElement('div');
            checkoutItem.classList.add('checkout-item');
            checkoutItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;

            checkoutItemsContainer.appendChild(checkoutItem);

            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        const summary = document.createElement('div');
        summary.classList.add('checkout-summary');
        summary.innerHTML = `
            <p>Total Items: ${totalItems}</p>
            <p>Total Price: $${totalPrice.toFixed(2)}</p>
        `;
        checkoutItemsContainer.appendChild(summary);
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        alert('Purchase Complete!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    }

    displayCheckoutItems();
    checkoutForm.addEventListener('submit', handleFormSubmission);
});

