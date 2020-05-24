<?php
$dbhost;  //getenv("MARIADB_34_SERVICE_HOST");
$dbport; 
$dbuser; 
$dbpwd; 
$dbname;
$connection;




function writeMsg() {
    echo "Hello world!<br>";
    echo "host: ".getenv("MYSQL_SERVICE_HOST")."<br>";
    echo "port: ".getenv("MYSQL_SERVICE_PORT")."<br>";
    echo "user: ".getenv("databaseuser")."<br>";
    echo "password: ".getenv("databasepassword")."<br>";
    echo "database: ".getenv("databasename")."<br>";
    
}
function getDbCredentials(){
    global $dbhost,$dbport,$dbuser,$dbpwd,$dbname;
    $dbhost =getenv("MYSQL_SERVICE_HOST");  //getenv("MARIADB_34_SERVICE_HOST");
    $dbport = getenv("MYSQL_SERVICE_PORT");
    $dbuser = getenv("databaseuser");
    $dbpwd = getenv("databasepassword");
    $dbname = getenv("databasename");
}
function getConnDb(){
    global $dbhost,$dbport,$dbuser,$dbpwd,$dbname,$connection;
    $connection = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);
    if ($connection->connect_errno) {
        printf("  Connect failed: %s\n", $mysqli->connect_error);
        exit();
    } 
    else {
        printf("Connected to the database");
    }
}
function CreateTableDb(){
    global $connection;
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
function insertIntoDb(){
     global $connection;
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
    global $connection;
    $sql = "SELECT * FROM  Movie ";
    $array = array();
    $result = mysqli_query($connection, $sql); // First parameter is just return of "mysqli_connect()" function
    echo "<div>Benvenuto alla pagina sullo store ci sono attualmente questi film:</div>";
    while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
        echo "-->";
        echo $row."<br>";
        $array[] = $row;
        /*foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
            echo " " . $value . " , "; // I just did not use "htmlspecialchars()" function. 
        }*/
        foreach($row as $value){
           echo "riga".$value."<br>";   
        }
        echo "\n";
    }
    echo "<br>Vai alla pagina migliore /Movie/movie.html e guarda là<br> ";
    print_r($array);
    echo "<br>";
    echo json_encode($array);
}
    
    

function closeConnDb(){
    $connection->close();    
}


function somma($a,$b){
    return $a+$b;
}

function prodotto($a,$b){
    return $a*$b;
}

function testSomma(){
    if(somma(2,2)==4)return 1;
    throw new Exception("TEST FAILED SOMM");
    //return somma(2,2)==4;
}

function testProdotto(){
    return prodotto(4,4)==16;
    throw new Exception("TEST FAILED PROD");
}

if(isset($_GET['tipo'])) {
        if($_GET['tipo'] == 'retrieveAll') {
            //richiamare le altre conn e compagnia cantante
            echo "DIOOOOOO";
            //showResult(); // call function one
        } 
        elseif($_GET['function'] == 'two') {
            //function two() // call function two
        }
    }
}
//mysql -u root -p
//my_password
//alter user 'username'@'localhost' identified with mysql_native_password by 'password'
?>


