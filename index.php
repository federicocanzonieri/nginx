<?php 
  echo "prova aggiornato";
  

  $dbServerName = "172.30.14.204";
  $dbUsername = "user";
  $dbPassword = "user";
  $dbName = "sampledb";
  
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
