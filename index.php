<?php 
  echo "prova aggiornato";

  $dbServerName = "10.128.0.243";
  $dbUsername = getenv("DB_USER");
  $dbPassword = getenv("DB_PASS");
  $dbName = getenv("DB_NAME");

  // create connection
  $conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

  // check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

?>
