<?php
	require('getmysql.php');
	
	if(isset($_POST['ph'])||isset($_POST['submit'])){
		
	}else{
		exit('非法操作');
	}
	
	
	if(isset($_POST['ph'])){
		$phoneph=$_POST['ph'];
		$pdphone=mysql_query("select * from yonghu where phone='$phoneph'");
		if(mysql_fetch_array($pdphone)){
			echo true;
		}else{
			echo false;
		}
	}

	if(isset($_POST['submit'])){
		$phone=$_POST['phone'];
		$pass=md5($_POST['pass']);
		$query=mysql_query("insert yonghu value(null,'$phone','$pass')");
		mysql_query($query);
		header('location:../login.html');
	}
?>