<?php
	require('getmysql.php');
	
	$query1="select * from recommendt";
	$query2="select * from recommend";
	
	$result1=mysql_query($query1);
	$result2=mysql_query($query2);
	
	$array1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$array1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
	$array2=array();
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$array2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	}
	
	
	class infomation{};
	
	
	$data=new infomation();
	
	$data->info1=$array1;
	$data->info2=$array2;
	
	
	echo json_encode($data);
?>