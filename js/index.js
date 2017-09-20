$(function(){
	//点击导航，发生的相关改变
	//console.log($('spanicon'));
	$('.header_items').hide();
	$('#acurrent').on('click',function(){
//		event.stopPropagation();
		$('#spanicon').addClass('spanicon');
		$('#iicon').addClass('iicon');
		$('#acurrent').addClass('a_current');
		$('.header_items').show();
		//console.log($('spanicon'));
	});
	$('#acurrent').on('blur',function(){
		$('#spanicon').removeClass('spanicon');
		$('#iicon').removeClass('iicon');
		$('#acurrent').removeClass('a_current');
		$('.header_items').hide();
		//console.log($('#spanicon'));
	});
	//点击‘二手车’显示‘汽车’
	$('.car').hide();
	$('#secondcar').on('blur',function(){
		$('.car').hide();
	});
	$('#secondcar').on('click',function(){
		$('.car').toggle();
	});
	//nav
	$('.lis').children('li').on('mouseenter',function(){
		var Nextindex=$(this).index()+1;
		$(this).children('a').css('border-color','transparent');
		$($('.lis').children('li')[Nextindex]).children('a').css('border-color','transparent');
	});
	$('.lis').children('li').on('mouseleave',function(){
		var num=$('.lis').children('li').length;
		for (var i=0;i<num-1;i++) {
			$($('.lis').children('li')).children('a').css('border-color','#3ea1de');
		}
	});
	//slider
	var idex=0;
	//点亮指示器
	light();
	function light(){
		$('#slider_ul li').removeClass('zhishi');
		$($('#slider_ul li')[idex]).addClass('zhishi');
	}
	//轮播
	var timer;
	var imgnum= $('.slider_box img').length-1;
	clearInterval($('.slider_box').timer);
	timer=setInterval(move,2000);
	function move(){
		$($('.slider_box img')[idex]).show().siblings().hide();
		if(idex+1>imgnum){
			idex=0;
		}else{
			idex=idex+1;
		}
		light();
		$($('.slider_box img')[idex]).fadeIn(1000).siblings().fadeOut(1000);
	}
	move();
	//鼠标悬停。移出效果
	$('.slider_box').on('mouseenter',function(){
		//console.log(1)
		clearInterval(timer);
	});
	$('.slider_box').on('mouseleave',function(){
		clearInterval(timer);
		timer=setInterval(move,2000);
	});
	//切换图片
	//console.log($('#img_titlesul').children('li').children('a'));
	$('#img_titlesul').children('li').on('mouseenter',function(){
	//	console.log(1);
		$(this).children('a').addClass('spa').end().siblings().children('a').removeClass('spa');
		$('#img').children('img').eq($(this).index()).show().siblings().hide();
	});
	//身边好车 选项卡
	var currennum=0;
	
	function addclass(){
		for (var i=0;i<$('.goodcar_bottom').children('.showcars').length;i++) {
			$($('.goodcar_bottom').children('.showcars')[i]).hide();
			$('#goodcar_nav').children('li').eq(i).removeClass('active');
		}
		$('.goodcar_bottom').children('.showcars').eq(currennum).show();
		$('#goodcar_nav').children('li').eq(currennum).addClass('active');
	}
	addclass();
	$('#goodcar_nav').children('li').on('mouseenter',function(){
		currennum=$(this).index();
		addclass();
	})
	//厂商认证，选项栏
	$('.renzheng_topnavs_imgs').children('.showcars').eq(0).show().siblings('.showcars').hide();
	$('.specialul').children('li').eq(0).addClass('now').css('background-color','#FFFFFF').siblings('li').addClass('othernow');
	$('.specialul').children('li').on('mouseenter',function(){
		var idex=$(this).index();
		$('.specialul').children('li').removeClass('now');
		$('.specialul').children('li').removeClass('othernow');
		$('.specialul').children('li').css('background-color','#ededed');
		$(this).addClass('now').siblings('li').addClass('othernow');
		$(this).css('background-color','#FFFFFF')
		$('.renzheng_topnavs_imgs').children('.showcars').eq(idex).show().siblings('.showcars').hide();
	});
	
});
