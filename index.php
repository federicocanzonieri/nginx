<?php 
  echo "prova aggiornato";
  

  $dbServerName = "10.128.0.244";
  $dbUsername = "user";
  $dbPassword = "user";
  $dbName = "sampledb"
  
  echo $dbUsername;
  echo $dbPassword; 
  echo $dbName;
  // create connection
  $conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

  // check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

?>
