<?php 
  echo "prova";

  $dbServerName = "10.128.0.243:3306";
  $dbUsername = "root";
  $dbPassword = "root";
  $dbName = "mysql";

  // create connection
  $conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

  // check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

?>
