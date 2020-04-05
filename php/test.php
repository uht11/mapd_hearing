<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$servername = "3.21.171.11";
$db_user = "myuser";
$db_password = "mypass";
$dbname="test";
$user_id=$_GET["username"];
$user_password=$_GET["password"];
$type=$_GET["type"];
$errors = array();


// Create connection
$conn = new mysqli($servername, $db_user, $db_password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if($type == 'login'){ //if the URL contains paramter type=login then authenticate
   authenticate();
}
elseif($type == 'registration'){ //if the user doesn't exist then register them
  register($user_id,$user_password);
}
else{
  return 0;
}

//authenticate the user 
function authenticate(){
  //read user (PRIVILEGE: SELECT existing user from database
  $connection=new mysqli($servername, "frontenduser", "mypass", "MAPD");
  
  //searching for existing user in database
  $sql = "SELECT * FROM test where user_id='$user_id' and password='$user_password'";

  //if the user is found return 1
  $result = $connection->query($sql);
  if ($result->num_rows > 0) { echo 1;} 
  else {echo 0;}
}

//register Marchant
function register($user_id,$user_password)
{ 
  //write user (PRIVILIGE: INSERT to database)
  $cnn = new mysqli($servername, "writeuser", "writepass", "MAPD");
  
  //adding the user to database
  $query = "INSERT INTO test( user_id, password ) VALUES ('$user_id', '$user_password')";
  
  //if the query succeeds return 1, else 0
  $res = mysqli_query($cnn, $query) or die(mysqli_error($cnn));
  if ($res){ echo 1 ; }
  else { echo 0 ;}
}

$conn->close();
?>