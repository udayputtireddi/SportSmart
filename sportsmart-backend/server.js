const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let products = [
    { id: 1, name: 'Cricket', price: 50.00, image: 'images/cricket.jpg' },
    { id: 2, name: 'Tennis', price: 70.00, image: 'images/tennis.jpg' },
    { id: 3, name: 'Badminton', price: 30.00, image: 'images/badminton.jpg' },
    { id: 4, name: 'Basketball', price: 60.00, image: 'images/basketball.jpg' },
    { id: 5, name: 'Soccer', price: 40.00, image: 'images/soccer.jpg' },
];

let cart = [];

// Get the list of products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Add a product to the cart
app.post('/api/cart', (req, res) => {
    const productId = req.body.productId;
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.product.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }
        res.status(200).send('Product added to cart');
    } else {
        res.status(404).send('Product not found');
    }
});

// Get the items in the cart
app.get('/api/cart', (req, res) => {
    res.json(cart);
});

// Remove a product from the cart
app.delete('/api/cart/:productId', (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    cart = cart.filter(item => item.product.id !== productId);
    res.status(200).send('Product removed from cart');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});