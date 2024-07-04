# Sports Equipment E-Commerce Website

## Overview
This project is a comprehensive sports equipment e-commerce website built using HTML, CSS, and JavaScript. The website features multiple pages including a homepage, product pages for various sports, a cart page, and a checkout page. It also includes a sophisticated thank you page that appears after a successful purchase. The website is designed to provide a seamless and visually appealing shopping experience.

## Preview
![Homepage Preview](./images/preview-homepage.png)
![Products Page Preview](./images/preview-products.png)
![Cart Page Preview](./images/preview-cart.png)

## Key Features
- **Responsive Design:** The website is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Interactive Cart:** Users can add items to their cart, view the cart contents, and remove items if needed.
- **Checkout Process:** The checkout page collects user information and processes the purchase.
- **LocalStorage Integration:** The cart uses LocalStorage to persist cart items across sessions.
- **Dynamic Content:** JavaScript is used to dynamically update the cart and checkout pages based on user interactions.
- **Fancy Thank You Page:** After completing a purchase, users are redirected to a visually appealing thank you page with animations and graphics.

## Technologies Used
- **HTML5:** For the structure and layout of the web pages.
- **CSS3:** For styling the website and making it visually appealing.
- **JavaScript:** For adding interactivity and managing cart functionality.
- **LocalStorage:** To store cart data and persist it across sessions.

## Installation and Usage

### Prerequisites
- A web browser (e.g., Chrome, Firefox, Safari)
- A local server setup (optional but recommended for testing)

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/sports-equipment-ecommerce.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd sports-equipment-ecommerce
    ```
3. **Open the `index.html` file in your web browser:**
    ```bash
    open index.html
    ```

### Usage
- **Browse Products:** Navigate through different sports equipment pages.
- **Add to Cart:** Click on the "Add to Cart" button on any product to add it to your cart.
- **View Cart:** Click on the cart icon to view items in your cart.
- **Checkout:** Proceed to the checkout page to enter your details and complete the purchase.
- **Thank You Page:** After completing a purchase, you will be redirected to a thank you page.

## File Structure
```plaintext
|-- index.html
|-- css
|   |-- styles.css
|-- js
|   |-- cart.js
|   |-- checkout.js
|   |-- products.js
|-- images
|   |-- preview-homepage.png
|   |-- preview-products.png
|   |-- preview-cart.png
|-- README.md
