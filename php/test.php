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
$errors = array();

// Create connection
$conn = new mysqli($servername, $db_user, $db_password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM user where user_id='$user_id' and user_password='$user_password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) { echo 1;} 
else {echo 0;}

function register($user_id, $user_password)
{
  $user_check = "SELECT * FROM user WHERE user_id='$user_id' LIMIT 1';
  $res = mysqli_query($conn, $user_check);
  $user = mysqli_fetch_assoc($result);
  
  //checking if the user already exists
  if($user){
    if($user['user_id'] === $user_id){
      array_push($errors, "User already exists");
    }
  }
  
  //registering the user 
  if(count($errors) == 0){
    $query = "INSERT INTO user (user_id, password)
              VALUES ('$user_id','$password')";
    mysqli_query($conn, $query);
  }
  
}

$conn->close();
?>