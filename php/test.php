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
$email=$_GET["email"];
$type=$_GET["type"];

// Create connection
$conn = new mysqli($servername, $db_user, $db_password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if($type == 'login'){ //if the URL contains paramter type=login then authenticate
   authenticate($user_id,$user_password);
}
elseif($type == 'registration'){ //if the user doesn't exist then register them
  register($user_id,$user_password,$email);
}
elseif($type == 'fetch' ){
  echo json_encode(fetchuser());
}
elseif($type == 'delete'){
  deleteuser($user_id);
}
else{
  echo 0;
}

//authenticate the user 
function authenticate($user_id,$user_password){
  //read user (PRIVILEGE: SELECT existing user from database
  $connection = new mysqli($servername, "frontenduser", "mypass", "MAPD");
  
  //searching for existing user in database
  $sql = "SELECT * FROM test where user_id='$user_id' and password='$user_password'";

  //if the user is found return 1
  $result = $connection->query($sql);
 
  if ($result->num_rows > 0) { echo 1;} 
  else {echo 0;}
  mysqli_close($connection);
}

//register Marchant
function register($user_id,$user_password,$email)
{ 
  //write user (PRIVILIGE: INSERT to database)
  $cnn = new mysqli($servername, "writeuser", "writepass", "MAPD");
  
  //adding the user to database
  $query = "INSERT INTO test( user_id, password, Email ) VALUES ('$user_id', '$user_password', '$email')";
  
  //if the query succeeds return 1, else 0
  $res = mysqli_query($cnn, $query) or die(mysqli_error($cnn));
  if ($res){ echo 1 ; }
  else { echo 0 ;}
  mysqli_close($cnn);
}

function fetchuser()
{
  $connection = new mysqli($servername, "frontenduser", "mypass", "MAPD");
  //searching for existing user in database
  $sql = "SELECT * FROM test";
  
  $resultarray = array();
  $resultarray['error'] = '';
  //$resultarray['user'] = '';
  ($result = mysqli_query($connection, $sql)) or die($resultarray['error'] = mysqli_error($connection));
  
  if ($result->num_rows > 0) {
    // output data of each row
   
    while($row = $result->fetch_assoc()) {
      $resultarray[] = $row;
    }
  }
  else {
    $resultarray['result'] = "No user found";
  }
  mysqli_close($connection);
  return $resultarray;
}

function deleteuser($user_id)
{
  $connection = new mysqli($servername, "myuser", "mypass", "MAPD");
  //searching for existing user in database
  $sql = "DELETE FROM test where user_id='$user_id'";
  
  ($result = mysqli_query($connection, $sql)) or die(mysqli_error($connection));
  
  if ($result) {
    echo 1;
  }
  else {
    echo 0;
  }
  mysqli_close($connection);
}
$conn->close();
?>