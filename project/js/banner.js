define(['jquery'],function(){
	function setbanner(){
		var $oBox=$('.picbox li');
		var $text=$('.bannerdi a')
		var $picboxmain='';
		var $textbox='';
		$.post("php/banner.php",function(data){
			var $obj=$.parseJSON(data).info1;			
			$.each($obj, function(i,n){
				$picboxmain=`<a href="details.html"><img src="${n.pic}"></a>`;
				$textbox=`${n.text}`
				$oBox.eq(i).html($picboxmain);
				$text.eq(i).html($textbox)
			})
			
		})		
	}
	return{
		setbanner:setbanner
	}
});


	