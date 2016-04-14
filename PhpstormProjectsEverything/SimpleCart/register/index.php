<?php
require_once('../connect.php');

function register($conn) {
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $email = $_POST['email'];
    $token = generateToken();

    $sql = 'INSERT INTO users (username, password, email, token) VALUES (?, ?, ?, ?)';
    $stmt = $conn->prepare($sql);
    try {
        if ($stmt->execute(array($username, $password, $email, $token))) {
            setcookie('token', $token, 0, "/");
            $sql = 'INSERT INTO orders (users_id, status) (SELECT u.id, "new" FROM users u WHERE u.token = ?)';
            $stmt1 = $conn->prepare($sql);
            if ($stmt1->execute(array($token))) {
                echo 'Account Registered';
            }
        }
    }
    catch (PDOException $e) {
        echo 'Username or Email Already Registered';
    }
}

function generateToken() {
    $date = date(DATE_RFC2822);
    $rand = rand();
    return sha1($date.$rand);
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
    if(isset($_POST['register'])) {
        register($dbh);
    }
?>


<form method="post" action="" style="color:black">
    <input type="text" name="username" placeholder="Username"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="text" name="email" placeholder="Email"/>
    <input type="submit" name="register" value="REGISTER" style="color: black;"/>
</form>
</div>
</body>
</html>
