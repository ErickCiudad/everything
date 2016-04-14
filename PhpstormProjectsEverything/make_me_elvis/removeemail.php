<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Make Me Elvis - Remove Email</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>

<?php
$dbh = new PDO('mysql:host=localhost;dbname=elvis_store', 'root', 'root');


$email = $_POST['email'];

$query = "DELETE FROM email_list WHERE email = :email";

$stmt = $dbh->prepare($query);
$stmt->execute(array('email'=>$email));

echo 'Customer removed: ' . $email;
?>

</body>
</html>
