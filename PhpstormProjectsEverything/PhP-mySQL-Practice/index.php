<?php
?>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add User</title>
</head>
​
<body>
<div class="error">
    <?php
    if($error){
        echo $error;
        echo '<br /><br />';
    }
    ?>
</div>
​
<div class="success">
    <?php
    if($success){
        echo $success;
        echo '<br /><br />';
    }
    ?>
</div>
​
<h1>Add User</h1>
​
<form name="addUser" method="post">
    <input name="name" placeholder="Your Name" />
    <input name="email" placeholder="Your Email" />
    <button type="submit" name="addUser" value="1">Add New User</button>
</form>
​
<h1>Existing Users</h1>
