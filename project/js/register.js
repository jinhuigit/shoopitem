;(function($){
	var $oInputbox=$('.input-right')
	var $oInput=$('.input-right input');
	var $megTip=$('.megTip');
	var $yanzhen=$('.yanzhen');
	var $exclick=$('.exclick');
	var $sucessWrap=$('.sucessWrap')
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
				$.post("php/yonghu.php",{ph:$(this).val()},function(data){
					if(!!data){
						$megTip.eq(0).html('该手机号已被注册')
						$megTip.eq(0).show();
						$megTip.eq(0).addClass('red');
						$oInputbox.eq(0).addClass('redborder')
						$sucessWrap.eq(0).hide()
					}else{
						$megTip.eq(0).hide();
						$megTip.eq(0).removeClass('red');
						$oInputbox.eq(0).removeClass('redborder');
						$sucessWrap.eq(0).show();
					}
				})
			}else{
				$megTip.eq(0).html('手机号格式不正确，请重新输入')
				$megTip.eq(0).show();
				$megTip.eq(0).addClass('red');
				$oInputbox.eq(0).addClass('redborder')
				$sucessWrap.eq(0).hide()
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
					$sucessWrap.eq(1).show()
				}else{
					$megTip.eq(1).html('密码过于单一，建议两种以上字符组合')
					$megTip.eq(1).show();
					$megTip.eq(1).addClass('red');
					$oInputbox.eq(1).addClass('redborder')
					$sucessWrap.eq(1).hide()
				}				
			}else{
				$megTip.eq(1).html('长度只能在6-16位')
				$megTip.eq(1).show();
				$megTip.eq(1).addClass('red');
				$oInputbox.eq(1).addClass('redborder')
				$sucessWrap.eq(1).hide()
			}
		}
	});
	
	$oInput.eq(2).on('blur',function(){
		if($(this).val()!=''){
			var $reg=new RegExp('^'+$oInput.eq(1).val()+'$');
			if($reg.test($(this).val())){
				$megTip.eq(2).hide();
				$megTip.eq(2).removeClass('red');
				$oInputbox.eq(2).removeClass('redborder')
				$sucessWrap.eq(2).show()
			}else{
				$megTip.eq(2).html('两次输入密码不一致，请重新输入')
				$megTip.eq(2).show();
				$megTip.eq(2).addClass('red');
				$oInputbox.eq(2).addClass('redborder')
				$sucessWrap.eq(2).hide()
			}
		}
	});
	
	$oInput.eq(3).on('blur',function(){
		if($(this).val()!=''){
			var $reg=new RegExp('^'+$yanzhen.html()+'$');
			if($reg.test($(this).val().toUpperCase())){
				$megTip.eq(3).hide();
				$megTip.eq(3).removeClass('red');
				$oInputbox.eq(3).removeClass('redborder')
				$sucessWrap.eq(3).show()
			}else{
				$megTip.eq(3).html('验证码错误，请重新输入')
				$megTip.eq(3).show();
				$megTip.eq(3).addClass('red');
				$oInputbox.eq(3).addClass('redborder')
				$sucessWrap.eq(3).hide()
			}
		}
	});
	
	$oInput.eq(4).on('blur',function(){
		if($(this).val()!=''){
			var $reg=/\d{6}/;
			if($reg.test($(this).val())){
				$megTip.eq(4).hide();
				$megTip.eq(4).removeClass('red');
				$oInputbox.eq(4).removeClass('redborder')
				$sucessWrap.eq(4).show()
			}else{
				$megTip.eq(4).html('验证码错误，请重新输入')
				$megTip.eq(4).show();
				$megTip.eq(4).addClass('red');
				$oInputbox.eq(4).addClass('redborder')
				$sucessWrap.eq(4).hide()
			}
		}
	});
	
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
	
	var $zhi=0
	$('.btn input').on('click',function(){
		$zhi=0
		$sucessWrap.each(function(i){			
			if($(this).attr('style')=='display: block;'){
				$zhi++
			}
		})
		
	})
	$('form').on('submit',function(){
		if($zhi==5){
			return true
		}else{
			return false
		}
		
	})
	
})(jQuery);
