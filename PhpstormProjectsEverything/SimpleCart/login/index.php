<?php
require_once('../connect.php');

function login($conn) {
    setcookie('token', "", 0, "/");
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    $stmt = $conn->prepare($sql);
    if ($stmt->execute(array($username, $password))) {
        $valid = false;
        while ($row = $stmt->fetch()) {
            $valid = true;
            $token = generateToken();
            $sql = 'UPDATE users SET token = ? WHERE username = ?';
            $stmt1 = $conn->prepare($sql);
            if ($stmt1->execute(array($token, $username))) {
                setcookie('token', $token, 0, "/");
                echo 'Login Successful';
            }
        }
        if(!$valid) {
            echo 'Username or Password Incorrect';
        }
    }
}

function generateToken() {
    $date = date(DATE_RFC2822);
    $rand = rand();
    return sha1($date.$rand);
}

if(isset($_POST['login'])) {
    login($dbh);
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
<body style="color: black">
<ul class="nav nav-tabs">
    <li role="presentation" class=""><a href="/SimpleCart">Home</a></li>
    <li role="presentation"><a href="/SimpleCart/login">Login</a></li>
    <li role="presentation"><a href="/SimpleCart/register">Register</a></li>
    <li role="presentation"><a href="/SimpleCart/cart"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a></li>
    <h1>Instruments Online</h1>
</ul>
<br><br>
<div id="content">

    <form method="post" action="" style="color:black">
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <input type="submit" name="login" value="LOGIN" style="color: black;"/>
    </form>
    </div>
</body>
</html>
