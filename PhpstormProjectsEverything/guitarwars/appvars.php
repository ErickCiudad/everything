<?php
// Define application constants
$dbh = new PDO('mysql:host=localhost;dbname=gwdb', 'root', 'root');


define('GW_UPLOADPATH', 'images/');
define('GW_MAXFILESIZE', 32768);
?>