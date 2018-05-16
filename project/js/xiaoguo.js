define(['jquery'],function(){
	function lunbo(){
		var $oBox=$('.picbox li');
		var $text=$('.bannerdi a');
		var $index=0;
		$text.on('mouseover',function(){
			$index=$(this).index();
			exchange($index)
		});
		
		function exchange(num){
			$text.eq(num).addClass('active').siblings('.bannerdi a').removeClass('active');
			$oBox.eq(num).show().animate({
				opacity:1
			},800).siblings('.picbox li').hide().css("opacity","0");
		};	
	}
	return{
		lunbo:lunbo
	}
});