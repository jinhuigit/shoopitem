define(['jquery'],function(){
	function lunbo(){
		var $oBox=$('.picbox li');
		var $text=$('.bannerdi a');
		var $lbtn=$('.banner-main .lbtn')
		var $rbtn=$('.banner-main .rbtn')
		var $wrap=$('.banner-main')
		var $index=0;
		var $timer=null;
		$text.on('mouseover',function(){
			$index=$(this).index();
			exchange($index)
		});
		$lbtn.on('click',function(){
			$index--;
			if($index<0){
				$index=5;
			}
			exchange($index)
		});
		$rbtn.on('click',function(){
			$index++;
			if($index>5){
				$index=0;
			}
			exchange($index)
		});
		$wrap.on('mouseover',function(){
			clearInterval($timer);
		})
		$wrap.on('mouseout',function(){
			$timer=setInterval(function(){
				$rbtn.click()
			},3000)
		})
		$timer=setInterval(function(){
			$rbtn.click()
		},3000)
		
		function exchange(num){
			$text.eq(num).addClass('active').siblings('.bannerdi a').removeClass('active');
			$oBox.eq(num).show().animate({
				opacity:1
			},800).siblings('.picbox li').hide().css("opacity","0");
		};	
	}
	function tab(obj1url,obj2url){
		$(obj1url).on('mouseover',function(){
			$(this).addClass('active').siblings(obj1url).removeClass('active')
			$(obj2url).eq($(this).index()).show().siblings(obj2url).hide()
		});
	}
	function tabone(){
		tab('.recommend_left .tabtop a','.recommend_left .tabbottom li')
	}
	function tabwx(){
		$('.wenxue-header ul a').on('mouseover',function(){
			$('.wenxue-header ul a').removeClass('active')
			$(this).addClass('active')
			$(obj2url).eq($(this).index()).show().siblings(obj2url).hide()
		});
	}
	return{
		lunbo:lunbo,
		tabone:tabone,
		tabwx:tabwx
	}
});