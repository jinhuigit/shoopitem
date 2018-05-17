<?php
require('getmysql.php');

if(isset($_POST['ph']) && isset($_POST['pass'])||isset($_POST['submit'])){
	
	
}else{
	exit('非法操作');
}

$phone=$_POST['ph'];//获取用户名
$pass=md5($_POST['pass']);
$query="select * from yonghu where phone='$phone' and pass='$pass'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;//登陆成功	
}else{
	echo false;//登陆失败
}

if(isset($_POST['submit'])){
	header('location:../index.html');
}
?>