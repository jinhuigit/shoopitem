<?php
	header('content-type:text/html;charset=gbk');
	$search=$_POST['searchv'];
	$content=file_get_contents('http://www.bookschina.com/book_find2/ajax/?keyword='.$search);
	echo $content;
?>