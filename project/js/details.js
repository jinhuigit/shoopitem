;(function($){
	function addCookie(key,value,day){
		var date=new Date();//创建日期对象
		date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
		document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
	}
	function getCookie(key){
		var str=decodeURI(document.cookie);
		var arr=str.split('; ');
		for(var i=0;i<arr.length;i++){
			var arr1=arr[i].split('=');
			if(arr1[0]==key){
				return arr1[1];
			}
		}
	}	
	
	$('.buyButton').on('click',function(){
		var sid=$(this).attr('sid')
		if (getCookie('cartsid') && getCookie('cartnum')){
			var s = getCookie('cartsid').split(',');//存放sid数组
	    	var n = getCookie('cartnum').split(',');//存放数量数组	    	
	    	s.push(sid);//将当前id添加到数组里面。
	        addCookie('cartsid', s.toString(), 7);//将整个数组添加到cookie
	        n.push(1);//走这里数量都是1.
	        addCookie('cartnum', n.toString(), 7);
		}else{
			var sidarr = [];
			var numarr = [];
	    	sidarr.push(sid);//将当前id添加到数组里面。
	        addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
	        numarr.push(1);//走这里数量都是1.
	        addCookie('cartnum', numarr.toString(), 7);
		}
	})
})(jQuery);
