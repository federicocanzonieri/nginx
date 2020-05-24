<?php

function writeMsg() {
    echo "Hello world!<br>";
    echo "host".getenv("MYSQL_SERVICE_HOST")."<br>";
    echo "user".getenv("MYSQL_SERVICE_PORT")."<br>";
    echo "pass".getenv("databaseuser")."<br>";
    echo "name".getenv("databasepassword")."<br>";
}
function getDbCredentials(){
    $dbhost =getenv("MYSQL_SERVICE_HOST");  //getenv("MARIADB_34_SERVICE_HOST");
    $dbport = getenv("MYSQL_SERVICE_PORT");
    $dbuser = getenv("databaseuser");
    $dbpwd = getenv("databasepassword");
    $dbname = getenv("databasename");
}
function getConnDb(){
    $connection = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);
    if ($connection->connect_errno) {
        printf("  Connect failed: %s\n", $mysqli->connect_error);
        exit();
    } 
    else {
        printf("Connected to the database");
    }
}
function getCreateTable(){
    
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
        echo "   Error creating table: " . $conn->error . "<br>";
    }
}
/*if ($connection->connect_errno) {
    printf("  Connect failed: %s\n", $mysqli->connect_error);
    exit();
} 
else {
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
        echo "   Error creating table: " . $conn->error . "<br>";
    }
    */
function insertIntoDb(){
     $sql = "INSERT INTO Movie (id,title, trama, anno,durata) VALUES
     (1,'John Wick', 'John Wick sta per scatenare l inferno in terra ...', 2019,'2h 23min'),
     (2,'Avengers End game', 'Viaggi nel tempo è l unica cosa che ci mancava', 2019,'3h 23min'),
     (3,'MATRIX REVOLUTION', 'L eletto è lui tempo è l unica cosa che ci mancava', 2000,'2h 00min')";
     if ($connection->query($sql) === TRUE) {
            echo "<br>New record(s) created successfully<br>";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
    }
}

function showResult(){
    $sql = "SELECT * FROM  Movie ";
    $result = mysqli_query($connection, $sql); // First parameter is just return of "mysqli_connect()" function
    echo "<div>Benvenuto alla pagina sullo store ci sono attualmente questi film:</div>";
    while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
        echo "-->";
        foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
            echo " " . $value . " , "; // I just did not use "htmlspecialchars()" function. 
        }
        echo "\n";
    }
    echo "<br>Vai alla pagina migliore /Movie/movie.html e guarda là<br> ";
}
    
    
   /*$sql = "SELECT * FROM  Movie ";
   $result = mysqli_query($connection, $sql); // First parameter is just return of "mysqli_connect()" function
    
   echo "<div>Benvenuto alla pagina sullo store ci sono attualmente questi film:</div>";
    while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
        echo "-->";
        foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
            echo " " . $value . " , "; // I just did not use "htmlspecialchars()" function. 
        }
        echo "\n";
    }
    echo "<br>Vai alla pagina migliore /Movie/movie.html e guarda là<br> ";
    
    }
    */
function closeConnDb(){
    $connection->close();    
}


//mysql -u root -p
//my_password
//alter user 'username'@'localhost' identified with mysql_native_password by 'password'



writeMsg();
getDbCredentials();
writeMsg();
getConnDb();








?>
<html> 
    <head>
        <title>Applicazione PHP</title>
    </head>
    <body>
        <p> INFO SULLE VARIABILI D'AMBIENTE</p>
       
        <div><h1>ENV</h1> </div>
        <div><h1>Host: <?php echo $dbhost; ?></h1></div>
        <div><h1>Port: <?php echo $dbport; ?></h1></div>
        <div><h1>User: <?php echo $dbuser; ?></h1></div>
        <div><h1>Password: <?php echo $dbpwd; ?></h1></div>
        <div><h1>DB NAME:<?php echo $dbname;?></h1></div>
        <button onclick="myFunction()">Click me</button>
        
        <p id="demo"></p>
        <script src="nome.js"></script>
          </body>
 </html>
