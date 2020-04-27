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
$connection = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);

if ($connection->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
} else {
    printf("Connected to the database");
    $sql = "CREATE TABLE Movie (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    trama VARCHAR(255) NOT NULL,
    anno INT(6),
    durata VARCHAR(10)
    )";
    if ($connection->query($sql) === TRUE) {
        echo "Table MOVIE created successfully";
    } 
    else {
        echo "Error creating table: " . $conn->error;
    }
    $sql = "INSERT INTO Movie (id,title, trama, anno,durata)
    VALUES (1,'John Wick', 'adhaj hdsajd hsajd asjdhsahjd hasjd hash', 2019,'2h 23min')";

    if ($connection->query($sql) === TRUE) {
            echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $sql = "SELECT * FROM  Movie ";
    $result = mysqli_query($connection, $sql); // First parameter is just return of "mysqli_connect()" function
    
   
    while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
        echo "<tr>";
        foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
            echo " er" . $value . "rer "; // I just did not use "htmlspecialchars()" function. 
        }
        echo "er er";
    }
    echo "er e";
    
    }
$connection->close();

//mysql -u root -p
//my_password
//alter user 'username'@'localhost' identified with mysql_native_password by 'password'

echo "ciao carissimo";?>
<html> 
    <head>
        
    </head>
    <body>
        <p> OK é CAMBIATO QUALCOSA </p>
        <button onclick="myFunction()">Click me</button>
        
        <p id="demo"></p>
            <script src="nome.js"></script>
        
