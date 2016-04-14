<?php
  require_once('connectvars.php');

  if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
    // The username/password weren't entered so send the authentication headers
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate: Basic realm="Mismatch"');
    exit('<h3>Mismatch</h3>Sorry, you must enter your username and password to log in and access this page. If you ' .
      'aren\'t a registered member, please <a href="signup.php">sign up</a>.');
  }

  // Connect to the database

  // Grab the user-entered log-in data
  $user_username =  trim($_SERVER['PHP_AUTH_USER']);
  $user_password =  trim($_SERVER['PHP_AUTH_PW']);

  // Look up the username and password in the database
  $query = "SELECT user_id, username FROM mismatch_user WHERE username = :user_username AND password = SHA(:user_password)";
    $stmt = $dbh->prepare($query);
    $result = $stmt->execute(
    array(
        'username' => $user_username,
        'password' => $user_password,
    )
);
    $count =$stmt->rowCount();

  if ($count == 1) {
    // The log-in is OK so set the user ID and username variables
      $stmt = $dbh->prepare($query);
      $stmt->execute();
      $result = $stmt->fetchAll();

    $user_id = $row['user_id'];
    $username = $row['username'];
  }
  else {
    // The username/password are incorrect so send the authentication headers
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate: Basic realm="Mismatch"');
    exit('<h2>Mismatch</h2>Sorry, you must enter a valid username and password to log in and access this page. If you ' .
      'aren\'t a registered member, please <a href="signup.php">sign up</a>.');
  }

  // Confirm the successful log-in
  echo('<p class="login">You are logged in as ' . $username . '.</p>');
?>
