;(function($){
	var $oInputbox=$('.input-right')
	var $oInput=$('.input-right input');
	var $megTip=$('.megTip');
	
	kong(0,'请输入您的常用手机号码');
	kong(1,'请输入密码')
	kong(2,'密码不能为空')
	kong(3,'验证码不能为空')
	kong(4,'验证码不能为空')
	function kong(index,notext){
		var $vaule=$oInput.eq(index).attr('placeholder');
		$oInput.eq(index).on('focus',function(){
			if($(this).attr('placeholder')==$vaule){
				$megTip.eq(index).show();				
				$(this).attr('placeholder','');
			}
		});
		$oInput.eq(index).on('blur',function(){
			if($(this).val()==''){
				$megTip.eq(index).html(notext);
				$megTip.eq(index).addClass('red')
				$(this).attr('placeholder',$vaule);
				$oInputbox.eq(index).addClass('redborder')
			}
		});		
	}
	
	$oInput.eq(0).on('blur',function(){
		if($(this).val()!=''){
			var $reg=/^1[34578]\d{9}$/;
			if($reg.test($(this).val())){
				$megTip.eq(0).hide();
				$megTip.eq(0).removeClass('red');
				$oInputbox.eq(0).removeClass('redborder')
			}else{
				$megTip.eq(0).html('手机号格式不正确，请重新输入')
				$megTip.eq(0).show();
				$megTip.eq(0).addClass('red');
				$oInputbox.eq(0).addClass('redborder')
			}
		}
	});
	
	$oInput.eq(1).on('blur',function(){
		if($(this).val()!=''){
			var $reg=/^.{6,16}$/;
			var $regzf=/[^0-9a-zA-Z]/;
			var $regs=/[0-9]/;
			var $regz=/[a-zA-Z]/;
			var $num=0;
			if($regzf.test($(this).val())){
				$num++;
			}
			if($regs.test($(this).val())){
				$num++;
			}
			if($regz.test($(this).val())){
				$num++;
			}
			if($reg.test($(this).val())){
				if($num>=2){
					$megTip.eq(1).hide();
					$megTip.eq(1).removeClass('red');
					$oInputbox.eq(1).removeClass('redborder')
				}else{
					$megTip.eq(1).html('密码过于单一，建议两种以上字符组合')
					$megTip.eq(1).show();
					$megTip.eq(1).addClass('red');
					$oInputbox.eq(1).addClass('redborder')
				}				
			}else{
				$megTip.eq(1).html('长度只能在6-16位')
				$megTip.eq(1).show();
				$megTip.eq(1).addClass('red');
				$oInputbox.eq(1).addClass('redborder')
			}
		}
	});
	
	$oInput.eq(2).on('blur',function(){
		if($(this).val()!=''){
			var $reg=new RegExp();
			if($reg.test($(this).val())){
				$megTip.eq(2).hide();
				$megTip.eq(2).removeClass('red');
				$oInputbox.eq(2).removeClass('redborder')
			}else{
				$megTip.eq(2).html('手机号格式不正确，请重新输入')
				$megTip.eq(2).show();
				$megTip.eq(2).addClass('red');
				$oInputbox.eq(2).addClass('redborder')
			}
		}
	});
	
	
})(jQuery);
