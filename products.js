document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <h3>${product.name}</h3>
                        <p>$${product.price.toFixed(2)}</p>
                        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
                productList.appendChild(productElement);
            });
        });
});

function addToCart(productId) {
    fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
    }).then(response => {
        if (response.ok) {
            alert('Product added to cart');
        } else {
            alert('Failed to add product to cart');
        }
    });
}

