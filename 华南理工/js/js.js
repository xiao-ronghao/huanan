var is_mobi = true;
		        // 判断是手机还是电脑
		        is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
		        if (is_mobi) {//移动端
		            console.log("移动端")
		            
		        }else{//pc端
		            console.log("电脑端")
		            alert("抱歉，能力有限只用移动端打开")
		        }
$('#head-1').ready(function() {
	$('.menu-list').hide();
});
$('#head-1').click(function() {
	$('.menu-list').toggle('slow', 'linear');
});


$('.menu-head + div').hide();
$('.menu-head').click(function() {

	$(this).next('div').show();
	var parentli = $(this).parent('li');
	var lis = parentli.siblings('li');

	lis.children('div').hide();
});


var a = document.querySelector('body');
//触摸开始事件
a.addEventListener('touchstart',function(e){
	console.log('touchstart');
	console.log(e.changedTouches);
	console.log(e.targetTouches);
	console.log(e.touches);
});

//触摸滑动事件
a.addEventListener('touchmove',function(e){
	console.log('touchmove');
	console.log(e.changedTouches);
	console.log(e.targetTouches);
	console.log(e.touches);
});
//触摸结束事件
a.addEventListener('touchend',function(e){
	console.log('touchend');
	console.log(e.changedTouches);
	console.log(e.targetTouches);
	console.log(e.touches);
});