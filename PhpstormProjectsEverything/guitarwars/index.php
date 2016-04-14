<?php
require_once('authorize.php')
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Guitar Wars - High Scores</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <h2>Guitar Wars - High Scores</h2>
  <p>Welcome, Guitar Warrior, do you have what it takes to crack the high score list? If so, just <a href="addscore.php">add your own score</a>.</p>
  <hr />
  <a href="admin.php"><p>admin page</p></a>

<?php
define('GW_UPLOADPATH', 'images/');
require_once('appvars.php');
require_once('connectvars.php');
  // Connect to the database 
$dbh = new PDO('mysql:host=localhost;dbname=gwdb', 'root', 'root');

  // Retrieve the score data from MySQL
  $query = "SELECT * FROM guitarwars ORDER BY score DESC";
$stmt = $dbh->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll();

  // Loop through the array of score data, formatting it as HTML 
  echo '<table>';
$i = 0;
    // Display the score data

foreach ($result as $row) {

    $filepath = GW_UPLOADPATH . $row['screenshot'];

    if ($i == 0) {
        echo '<tr><td colspan=“2” class=“topscoreheader” id="thisDiv">Top Score:' . $row['score'].'</td></tr>';
    }

    echo '<tr><td class="scoreinfo">';
    echo '<span class="score">' . $row['score'] . '</span><br />';
    echo '<strong>Name:</strong> ' . $row['name'] . '<br />';
    echo '<strong>Date:</strong> ' . $row['date'] . '</td>';
  if(is_file($filepath) && filesize($filepath) > 0){
  echo '<td> <img src="'.$filepath .'" alt="Score image" /> </td></tr>';
} else {
  echo '<td><img src="images/unverified.gif" alt="Unverified score" /></td></tr>';
}
    $i++;
 }
echo '</table>';
?>
</body>
</html>