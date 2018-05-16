define(['jquery'],function(){
	//导入recommend里面的内容
	function setreco(){
		var $oBox=$('.tabbottom');
		var $oLi=$('.tabli');
		var $num=0;
		var $tabtou='';
		
		$.post("php/recommend.php",function(data){
			var $obj1=$.parseJSON(data).info1;	
			$.each($obj1, function(i,n) {
				$tabtou=`<div class="tabtou">
            				<div class="tabtoupic">
            					<a href="#" target="_blank" title="${n.th}">
            						<img src="${n.tpic}" alt="${n.th}">
            					</a>
            				</div>
            				<div class="tabtoutext">
            					<h2><a href="#" title="${n.th}" target="_blank"></a></h2>
                				<div class="bookprice"><span>${n.price}</span><del>${n.del}</del></div>
                				<div class="bookcont"><p>${n.content}</p><p>&nbsp;</p></div>                       		
            				</div>
            			</div>`;
            	var $div=$('<div>').html($tabtou);
            	$oLi.eq(i).prepend($div)
			});
			
			var $obj2=$.parseJSON(data).info2;
			var $oUl=$('.tabcont ul');
			$.each($obj2,function(i,n){
				$tabtou=`<div class="img">
							<a href="#" target="_blank">
								<img src="${n.pic}" alt="${n.h}">
							</a>
						</div>
						<div class="name">
							<a href="#" title="${n.h}" target="_blank">${n.h}</a>
						</div>
						<div class="priceWrap">
							<span>${n.price}</span>
							<del>${n.del}</del>
						</div>`
				if(i>=0 && i<=3){
					var $li=$('<li>').html($tabtou);
					$oUl.eq(0).append($li)
				}
				if(i>=4 && i<=7){
					var $li=$('<li>').html($tabtou);
					$oUl.eq(1).append($li)
				}
				if(i>=8 && i<=11){
					var $li=$('<li>').html($tabtou);
					$oUl.eq(2).append($li)
				}
				if(i>=12 && i<=15){
					var $li=$('<li>').html($tabtou);
					$oUl.eq(3).append($li)
				}
			})
		})
	}
	
	//导入taoshu里面的内容
	function settaoshu(){
		$.post("php/taoshu.php",function(data){
			var $obj1=$.parseJSON(data).info1;
			var $wrap=''
			var $oLi=$('.taoshu-main li')
			$.each($obj1,function(i,n){
				$wrap=`<div class="taoshu-pic">
							<img src="${n.pic}"/>
						</div>
						<p>
							<a href="#">${n.cont}</a>
						</p>
						<div class="price">
							<span><i>团购价¥</i>${n.price}</span>
							<del>${n.del}</del>
							<b>${n.dazhe}</b>
						</div>`;
				$oLi.eq(i).html($wrap)
			})
		});
	}
	
	//导入special的数据
	function setspecial(){
		$.get("php/special.php",function(data){
			var $obj1=$.parseJSON(data).info1;
			var $oUl=$('.special-main ul')
			var $wrap=''
			$.each($obj1,function(i,n){
				$wrap=`<div class="bookwrap">
							<a href="#" target="_blank" title="${n.name}">${n.name}</a>
							<p>${n.zhuzhe}</p>
							<div>
								<span>${n.price}</span>
								<del>${n.del}</del>
							</div>
						</div>
						<div class="bookpic">
							<a href="#"  target="_blank" title="${n.name}"><img src="${n.pic}"/></a>
						</div>`
				
				if(i>=0 && i<=4){
					var $li=$('<li>').html($wrap);
					$oUl.eq(0).append($li)
				}
				if(i>=5 && i<=9){
					var $li=$('<li>').html($wrap);
					$oUl.eq(1).append($li)
				}
				if(i>=10 && i<=14){
					var $li=$('<li>').html($wrap);
					$oUl.eq(2).append($li)
				}
			})
		})
	}
	
	//导入中间三个相同模块的内容
	function box(){
		$.get("php/box.php",function(data){
			var $obj1=$.parseJSON(data).info1;			
			var $wrap=''
			var $oBox=$('.boxwrapper');
			$.each($obj1,function(i,n){
				$wrap=`<div class="box-leftl">
							<div class="boxpic">
								<a href="#">
									<img src="${n.pic}"/>
								</a>
							</div>
							<div class="boxtext">
								<h3>${n.h}</h3>
								<ul>
									<li>
										<span>></span>
										<a href="#">${n.one}</a>
									</li>
									<li>
										<span>></span>
										<a href="#">${n.two}</a>
									</li>
									<li>
										<span>></span>
										<a href="#">${n.three}</a>
									</li>
									<li>
										<span>></span>
										<a href="#">${n.four}</a>
									</li>
									<li>
										<span>></span>
										<a href="#">${n.five}</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="box-leftr">
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>`;
				$oBox.eq(i).html($wrap)
			});
			var $obj2=$.parseJSON(data).info2;
			var $oLi=$('.box-leftr ul li')
			$.each($obj2,function(i,n){
				$wrap=`<div class="leftrpic">
							<a href="#" target="_blank" title="${n.name}">
								<img src="${n.pic}" alt="${n.name}">
							</a>
						</div>
						<h3>
							<a href="#" target="_blank" title="${n.name}">${n.name}</a>
						</h3>
						<p>${n.zuozhe}</p>
						<div class="leftrpirce">
							<span>${n.price}</span>
							<del>${n.del}</del>
						</div>`
				$oLi.eq(i).html($wrap);
				$oLi.eq(i+15).html($wrap);
			});
			var $obj3=$.parseJSON(data).info3;
			var $aLi=$('.rightbox-wrap li')
			$.each($obj3,function(i,n){
				$wrap=`<a href="#" target="_blank" title="${n.text}" class="img">
					<img src="${n.pic}" alt="${n.text}">
				</a>
				<a href="#" title="${n.text}" target="_blank" class="text">${n.text}</a>`
				$aLi.eq(i).html($wrap)
			});
		});
	}
	return{
		setreco:setreco,
		settaoshu:settaoshu,
		setspecial:setspecial,
		box:box
	}
})
