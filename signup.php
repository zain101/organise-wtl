<?php
/*
	$host = "127.0.0.1";
	$user = "root";
	$pass = " root";
*/	
	$connect = mysql_connect('localhost','root','root'); 
	
	
	mysql_select_db("e_commerce", $connect)
		or die("unable to connect".mysql_error());
	//header("location:wel.html");
	
	$insert = "insert into SignUp(f_name, l_name, address, phno, email, username, password) values('$_POST[f_name]', '$_POST[l_name]', '$_POST[address]', '$_POST[phno]', '$_POST[email]', '$_POST[username]', '$_POST[password]')";
	if(!mysql_query($insert, $connect))
	{
		echo "Querry is Incorrect";
	}
	else
	{
	echo"welcome";
	}
	mysql_close($connect);
?>
