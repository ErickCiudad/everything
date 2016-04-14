<?php
require_once('../connect.php');

function retireOrder($conn) {
    $token = getToken();
    $sql = 'UPDATE users u LEFT JOIN orders o ON u.id = o.users_id AND o.status = "new" SET o.status = "old" WHERE u.token = ?';
    $stmt = $conn->prepare($sql);
    if ($stmt->execute(array($token))) {

    }
}

function createNewOrder($conn) {
    $token = getToken();
    $sql = 'INSERT INTO orders (users_id, status) (SELECT u.id, "new" FROM users u WHERE u.token = ?)';
    $stmt = $conn->prepare($sql);
    if ($stmt->execute(array($token))) {

    }
}

function checkout($conn) {
    retireOrder($conn);
    createNewOrder($conn);
    echo 'Checkout Successful';
}

function getToken() {
    if (isset($_COOKIE['token'])) {
        return $_COOKIE['token'];
    }
    else {
        header('location:/SimpleCart/login/');
    }
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Instruments Online</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="../styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script></head>
<body>
<ul class="nav nav-tabs">
    <li role="presentation" class=""><a href="/SimpleCart">Home</a></li>
    <li role="presentation"><a href="/SimpleCart/login">Login</a></li>
    <li role="presentation"><a href="/SimpleCart/register">Register</a></li>
    <li role="presentation"><a href="/SimpleCart/cart"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a></li>
    <h1>Instruments Online</h1>
</ul>
<br><br>
<div id="content">
    <?php
        if(isset($_POST['checkout'])) {
            checkout($dbh);
        }
    ?>
</div>
</body>
</html>