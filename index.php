<?php 
  echo "prova aggiornato";

  $dbServerName = "10.128.0.243";
  $dbUsername = "user";
  $dbPassword = "user";
  $dbName = "mysql";

  // create connection
  $conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

  // check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

?>
