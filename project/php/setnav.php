<?php
	require('getmysql.php');
	
	$query1="select * from tushunav";
	
	
	$result1=mysql_query($query1);
	
	
	$array1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$array1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
?>