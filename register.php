<?php
	
	/*declaration of localhost username password*/
	$host = "localhost";
	$user = "root";
	$pass = "root";
	
	/*connection code to connect to database*/
	$con = mysql_connect("$host", "$user", "$pass");
	
	/*To check connectivity*/
	if(!$con)
		die("unable to connect".mysql_error());
	else
		echo "Connected Successfully";
	
	/*To select database*/
	mysql_select_db("organiser", $con);
	
	/*To insert values*/
	$sql = "insert into register (username, email, password , mobile) values
	('$_POST[username]', '$_POST[email]', '$_POST[password]', '$_POST[mobile]')";
	
	/*To check insert query correction*/
	if(!mysql_query($sql, $con))
		echo "Querry is correct";
	else
		echo "".mysql_error();
	
	/*To go to final location after filling form*/
	header("Location:dashboard.html");
	
	/*To close connection*/
	mysql_close("$con");
	
?>

