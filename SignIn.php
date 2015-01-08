<?php

	session_start();
	$host="localhost";
	$user="root";
	$pass="root";
	
	$con = mysql_connect('$host','$user','$pass');

	if (!$con)
	{
		echo "Error in DBConnect() = " . mssql_get_last_message();
		die('Could not connect: ' . mysql_error());
	}
	
	mysql_select_db("organiser", $con);
	$myusername=$_GET['text1'];
	$mypassword=$_GET['passwd'];

	$mysql = "SELECT * FROM register WHERE username='$myusername' and password='$mypassword'";
	$result = mysql_query($mysql) or die("cannot execute query");

	$count = mysql_num_rows($result);
	$row = mysql_fetch_array($result);
	  
	$_SESSION['s_id'] = $row['id'];
	if($count==1)
	{
		//session_register('username');
		header("location:dashboard.html");
		}
	//	header("location:wel.html");// put your home page neme here
else
{		echo "invalid";
		header("location:login.html");
}
?>
