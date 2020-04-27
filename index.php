<?php


echo "host".getenv("MYSQL_SERVICE_HOST");
echo "user".getenv("databaseuser");
echo "pass".getenv("databasepassword");
echo "name".getenv("databasename");

$dbhost = getenv("MYSQL_SERVICE_HOST");
$dbport = getenv("MYSQL_SERVICE_PORT");
$dbuser = getenv("databaseuser");
$dbpwd = getenv("databasepassword");
$dbname = getenv("databasename");
$dbpwd="password";
$connection = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);

if ($connection->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
} else {
    printf("Connected to the database");
}
$connection->close();


echo "ciao carissimo";?>
<html> 
    <head>
        
    </head>
    <body>
        <p> OK é CAMBIATO QUALCOSA </p>
        <button onclick="myFunction()">Click me</button>
        
        <p id="demo"></p>
            <script src="nome.js"></script>
        
