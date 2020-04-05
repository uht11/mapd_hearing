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

echo $type;
// Create connection
$conn = new mysqli($servername, $db_user, $db_password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//authenticate();
//register();
if($type == 'login'){
   authenticate();

}
else{
  
  register($user_id,$user_password);
  
}

//authenticate the user 
function authenticate(){
  $connection=new mysqli($servername, "frontenduser", "mypass", "MAPD");
$sql = "SELECT * FROM test where user_id='$user_id' and password='$user_password'";
$result = $connection->query($sql);
if ($result->num_rows > 0) { echo 1;} 
else {echo 0;}
}

//register Marchant
function register($user_id,$user_password)
{ 
  //echo "------the user id is: ";
  //echo "$user_id";

//$query = "INSERT INTO business(location,storename,email,category,lat,longit,password,timestamp) VALUES ('$location','$storename','$email','$category','$lat','$longit','$password',now())";

  $cnn = new mysqli($servername, "writeuser", "writepass", "MAPD");
  $query = "INSERT INTO test( user_id, password ) VALUES ('$user_id', '$user_password')";



  $res = mysqli_query($cnn, $query) or die(mysqli_error($cnn));
  //echo $res;  

  if ($res){ echo 1 ; }
  else { echo 0 ;}
}

$conn->close();
?>