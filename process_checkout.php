<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "sportsmart";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$card = $_POST['card'];
$cvv = $_POST['cvv'];

// Insert data into database
$sql = "INSERT INTO orders (name, phone, address, card, cvv) VALUES ('$name', '$phone', '$address', '$card', '$cvv')";

if ($conn->query($sql) === TRUE) {
    // Redirect to thank you page
    $order_id = $conn->insert_id;
    header("Location: thank_you.html?order_id=$order_id");
} else {
    // Redirect back to checkout page with error
    header("Location: checkout.html?error=1");
}

$conn->close();
?>
