<?php 
  echo "prova aggiornato";
  echo getenv("DB_USER");
  echo getenv("DB_PASS");
  echo getenv("DB_NAME");

  $dbServerName = "10.128.1.5";
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
