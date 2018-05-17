;(function($){
	var $oInput=$('.input-right input');
	var $zhi=0;
	var $yanzhen=$('.yanzhen');
	var $exclick=$('.exclick');
	code();
	$yanzhen.on('click',function(){
		code()
	});
	$exclick.on('click',function(){
		code()
	})
	function code(){
		var str='';
		for(var i=1;i<=4;i++){
			var num=parseInt(Math.random()*43)+48;
			if(num>=48&&num<=57||num>=65&&num<=90){
				str+=String.fromCharCode(num);
			}else{
				i--;
			}
		}
		$yanzhen.html(str)
	}
	$oInput.eq(1).on('blur',function(){		
		$.post("php/dengr.php",{ph:$oInput.eq(0).val(),pass:$oInput.eq(1).val()},function(data){
			if(!!data){
				$zhi=0
				$zhi++
			}
		})	
		
	})
	
	$('.btn input').on('click',function(){
		if($oInput.eq(2).val().toUpperCase()==$yanzhen.html()){
			$zhi++
		}	
	})
	
	function addCookie(key,value,day){
		var date=new Date();//创建日期对象
		date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
		document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
	}
	
	$('form').on('submit',function(){
		
		console.log($zhi)
		if($zhi==2){	
			addCookie('UserName',$oInput.eq(0).val(),7);
			return true;
		}else{
			return false
		}
	})
})(jQuery);
