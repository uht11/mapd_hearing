<?php
$servername = "3.21.171.11";
$db_user = "myuser";
$db_password = "mypass";
$dbname="test";

$user_id=1;
$user_password=12345;

// Create connection
$conn = new mysqli($servername, $db_user, $db_password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM user where user_id='$user_id' and user_password='$user_password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) { echo "found";} 
else {echo "0 results \n";}
$conn->close();
?>