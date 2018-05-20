;(function($){
	$.ajax({
		url: 'json/cart.json',//推荐商品数据的接口
	    dataType: 'json'//数据的类型
	}).done(function(data){//data:接口的返回的数据
		var $html = '';
	    for (var i = 1; i < 6; i++) {
	    	 $html +=`<li>
            	<div class="p_img">
            		<a href="javascript:;" target="_blank"><img src="${data[i].img}" title="${data[i].title}" alt="${data[i].title}"></a>
            	</div>
            	<div class="p_name">
            		<a href="javascript:;" target="_blank">${data[i].title}</a>
            	</div>
            	<div class="p_price">
            		<strong>${data[i].price}</strong>
            		<del>${data[i].del}</del>
            	</div>
            	<div class="p_button">
            		<a href="javascript:;" sid="${data[i].sid}" ><b></b>加入购物车</a>
            	</div>
            </li>`        
	    }
	    $('.shoopwrap .clearfix').html($html);//将数据追加到商品列表
	});
	
	function createcart(sid, num) {//sid：图片的编号  num:商品的数量		
    $.ajax({
        url: 'json/cart.json',
        dataType: 'json'
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid) {//图片的sid和数据里面的sid匹配
                var $clone = $('.shoopbox:hidden').clone(true);//对隐藏的模块进行克隆
                //都是赋值
                $clone.find('.shoopboxpic').find('img').attr('src', data[i].img);
                $clone.find('.shoopboxpic').find('img').attr('title', data[i].title);
                $clone.find('.shoopboxpic').find('img').attr('sid', data[i].sid);
                $clone.find('.shoopboxname').find('a').html(data[i].title);
                $clone.find('.shoopboxdel').find('strong').html(data[i].price);
                $clone.find('.shoopboxprice').find('strong').html(data[i].del);
                $clone.find('.shoopbox-jj').find('input').val(num);
                $clone.find('.shoopboxph').find('strong').html(data[i].del);
                //计算价格,每个商品的价格
                var $dj1 = parseFloat($clone.find('.shoopboxdel strong').html());//获取单价
                $clone.find('.shoopboxph strong').html(($dj1 * num).toFixed(2));//num：数量
                $clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
                $('.shoopmain').append($clone);//追加
	        	totalprice();//总价和总数
				console.log(1)

            }
        }
    });
}
	
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
function delCookie(key){
	addCookie(key,'',-1);//添加的函数,将时间设置为过去时间
}

var sidarr = [];
var numarr = [];
function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}
	
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}
}

$('.shoopwrap .clearfix').on('click', '.p_button a', function() {//委托，点击购物车按钮
	$('.shoppingTitle').show()
	$('.cartEmpty').hide()
	$('.shoopmain').show()
	$('.shoopfoot').show()
	var sid = $(this).attr('sid');//当前按钮对应图片的sid
	cookieToArray();//获取cookie值，放到对应的数组中
	if ($.inArray(sid, sidarr) != -1) {//存在，数量加1
		$('.shoopbox:visible').each(function() {//遍历可视的商品列表
            if (sid == $(this).find('img').attr('sid')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
                var $num = $(this).find('.shoopbox-jj input').val();//获取数量的值
                $num++;//数量累加
                $(this).find('.shoopbox-jj input').val($num);//将数量赋值回去
                //计算价格
                var $dj = parseFloat($(this).find('.shoopboxdel strong').html());//获取当前的单价
                $(this).find('.shoopboxph strong').html(($dj * $num).toFixed(2));//计算商品总价
				console.log($dj)
                //存储数量到cookie里面。通过编号找数量
                numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
                addCookie('cartnum', numarr.toString(), 7);//添加购物车
                totalprice();
            }
        });
	}else{//当前商品列表没有进入购物车，创建商品列表
		sidarr.push(sid);//将当前id添加到数组里面。
        addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
        numarr.push(1);//走这里数量都是1.
        addCookie('cartnum', numarr.toString(), 7);
        createcart(sid, 1);
        totalprice();
	}
});

if (getCookie('cartsid') && getCookie('cartnum')) {
    var s = getCookie('cartsid').split(',');//存放sid数组
    var n = getCookie('cartnum').split(',');//存放数量数组
    for (var i = 0; i < s.length; i++) {
        createcart(s[i], n[i]);//遍历创建商品列表
    }
    $('.shoppingTitle').show()
    $('.shoopmain').show()
    $('.cartEmpty').hide()
    $('.shoopfoot').show()
}

function totalprice() {//计算总价
    var total = 0;//总的价格
    var countnum = 0;//总的数量
    $('.shoopbox:visible').each(function() {//可视的商品列表进行遍历，循环叠加
        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
            total += parseFloat($(this).find('.shoopboxph strong').html());
            countnum += parseInt($(this).find('.shoopbox-jj').find('input').val());
        }
    });
    //赋值
    $('.shoopfootrl .result b').html(total.toFixed(2));
    $('.shoopfootrl .result .jian').html(countnum);
}

$('.jjbox .jr').on('click', function() {
    var $count = $(this).parents('.shoopbox').find('.shoopbox-jj input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.shoopbox').find('.shoopbox-jj input').val($count);
    $(this).parents('.shoopbox').find('.shoopboxph').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});

$('.jjbox .jl').on('click', function() {
    var $count = $(this).parents('.shoopbox').find('.shoopbox-jj input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.shoopbox').find('.shoopbox-jj input').val($count);
    $(this).parents('.shoopbox').find('.shoopboxph').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});

function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.shoopbox').find('.shoopboxdel').find('strong').html());
    var $cnum = parseInt(row.parents('.shoopbox').find('.shoopbox-jj input').val());
    return ($dj * $cnum).toFixed(2);
}
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.shoopbox').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.shoopbox').find('.shoopbox-jj input').val();
    addCookie('cartnum', numarr.toString(), 7);
}

$('.shoppingTitle input').on('change', function() {
    $('.shoopbox:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.shoppingTitle input').prop('checked', $(this).prop('checked'));
    totalprice();//求和
});
$('.shoopfootl-c input').on('change', function() {
    $('.shoopbox:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.shoppingTitle input').prop('checked', $(this).prop('checked'));
    totalprice();//求和
});

var $inputchecked = $('.shoopbox:visible').find('input:checkbox');//获取委托元素
$('.shoopmain').on('change', $inputchecked, function() {
    var $inputs = $('.shoopbox:visible').find('input:checkbox'); //放内部
    if ($('.shoopbox:visible').find('input:checked').length == $inputs.size()) {
        $('.shoppingTitle input').prop('checked', true);
    } else {
        $('.shoppingTitle input').prop('checked', false);
    }
    totalprice();
});
$('.shoopmain').on('change', $inputchecked, function() {
    var $inputs = $('.shoopbox:visible').find('input:checkbox'); //放内部
    if ($('.shoopbox:visible').find('input:checked').length == $inputs.size()) {
        $('.shoopfootl-c input').prop('checked', true);
    } else {
        $('.shoopfootl-c input').prop('checked', false);
    }
    totalprice();
});


function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

$('.shoopmain').on('click', '.shoopbox .delete a', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
   	 $(this).first().parents('.shoopbox').remove();
   }
    delgoodslist($(this).first().parents('.shoopbox').find('img').attr('sid'), sidarr);
    totalprice();
});

//删除全部商品的函数
$('.shoopfootl-t a:first').on('click', function() {
    $('.shoopbox:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});


})(jQuery);
