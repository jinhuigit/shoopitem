define(['jquery'],function(){
	function autotop(){
		$('.notice-wrapper').animate({top:0},1000).animate({top:-40},1000).animate({top:-40},1000).animate({top:-80},1000,function(){
			$('.notice-wrapper').css("top","0");
			autotop();
		});
	};
	
	function search(){
		$('#sos').on('focus',function(){
			if($('#sos').val()=='所有人问所有人'){
				$('#sos').val('');
				$('.searchbox').html('');
			}			
		})
		$('#sos').on('blur',function(){
			if($('#sos').val()==''){
				$('#sos').val('所有人问所有人');
				$('.searchbox').html('');
			}
			$('.searchbox').html('');
		})
		$('#sos').on('input',function(){
			var searchbox=$('.searchbox');
			searchbox.html('');
			if($('#sos').val()!=''){
				$.post("php/search.php",{searchv:$('#sos').val()},function(data){
					var arr=$.parseJSON(data);
					$.each(arr,function(i,n){
						var newdivwrapper=$('<div class="divwrapper">')
						var newdivr=$('<div class="right">');
						var newdivl=$('<div class="left">');
						newdivl.html(n.label);
						newdivr.html('约'+'<span>'+n.amount+'</span>'+'种图书');
						newdivwrapper.append(newdivl);
						newdivwrapper.append(newdivr);
						searchbox.append(newdivwrapper)
					})
					
				})
			}
			
		})
	}
	function aselect(){
		var oLi=$('.aselect li');
		var dd=$('.search-select dd');
		var dt=$('.search-select dt');
		$('.search-select').on('mouseover',function(){
			dd.show()
		})
		$('.search-select').on('mouseout',function(){
			dd.hide()
		})
		oLi.on('click',function(){
			$(this).addClass('active').siblings('.aselect li').removeClass('active');
			dt.html($(this).html())
			dd.hide()
		})
	}
	function setnav(){
		var oBox=$('.nav-mainwrapper');
		
	}
	
	return{
		autotop:autotop,
		search:search,
		aselect:aselect,
	}
})