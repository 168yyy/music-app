$(function () {
	$('.button-collapse').bind('tap', function(e){
  		$('.side-nav').css({left:0});
  		e.stopPropagation();
	})
	$('.side-nav').bind("tap", function(e){
  		e.stopPropagation();
	})
	$(document).bind("tap swipeLeft", function(e){
  		$('.side-nav').css({left:'-105%'});
	})
	$(document).bind("swipeRight", function(e){
  		$('.side-nav').css({left:0});
	})

	var $slides=$('.slides li');
	$slides.bind('swipeLeft',function(){
		if($(this).next().length){
			$(this).css({left:'-100%'});
			$(this).next().addClass('active').css({left:'0'});
		}else{

		}
	})
	$slides.bind('swipeRight',function(){
		if($(this).prev().length){
			$(this).css({left:'100%'});
			$(this).prev().addClass('active').css({left:'0'});
		}else{

		}
	})

	$('#jinru').bind('tap',function(){
		$('div').remove('.shanpin');
		$('.denglv').css({display:'block'});
	})
	$('.jinruzhuye').bind('tap',function(){
		$(this).css({background:'red'});
		setInterval(function(){
			$('.denglv').css({display:'none'});
			$('.neiron').css({display:'block'});
		},500);
		
	})

	







	/*var $slides=$('.slides');
	//初始显示第一个li及其里面的内容   同时导航颜色设置成第一个li的背景色
	$slides.find('li').first().css({opacity:1,zIndex:200}).find('div').css({opacity:1});
	$('nav').removeClass().addClass($slides.find('li').first().attr('class'));
	//向左滑
	$slides.find('li').bind('swipeLeft',function(){
		//当前li及其里面的内容
		$(this).css({opacity:0,zIndex:1}).find('div').css({opacity:0});
		if($(this).next().length){
			$(this).next().css({opacity:1,zIndex:200}).find('div').css({opacity:1});
			$('nav').removeClass().addClass($(this).next().attr('class'));
		}else{
			$slides.find('li').first().css({opacity:1,zIndex:200}).find('div').css({opacity:1})
			$('nav').removeClass().addClass($slides.find('li').first().attr('class'));
		}		
	})
	//向右滑
	$slides.find('li').bind('swipeRight',function(e){
		e.stopPropagation();
		$(this).css({opacity:0,zIndex:1}).find('div').css({opacity:0});
		if($(this).prev().length){
			$(this).prev().css({opacity:1,zIndex:200}).find('div').css({opacity:1});
			$('nav').removeClass().addClass($(this).prev().attr('class'));
		}else{
			$slides.find('li').last().css({opacity:1,zIndex:200}).find('div').css({opacity:1});
			$('nav').removeClass().addClass($slides.find('li').last().attr('class'));
		}		
	})
	/*var $slides=$('.slides');
	var move = function(el,dir){
		var xx = {next:'first',prev:'last'};
		$(el).css({opacity:0,zIndex:1}).find('div').css({opacity:0});
		if($(el)[dir]().length){
			$(el)[dir]().css({opacity:1,zIndex:200}).find('div').css({opacity:1});
			$('nav').removeClass().addClass($(el)[dir]().attr('class'));
			current=$(el)[dir]().get(0);
		}else{
			$slides.find('li')[xx[dir]]().css({opacity:1,zIndex:200}).find('div').css({opacity:1});
			$('nav').removeClass().addClass($slides.find('li')[xx[dir]]().attr('class'));
			current=$slides[xx[dir]]().get(0);
		}
	}

	var current=$slides.get(0);
	setInterval(function(){
		move(current,'next');
	},5000);

	$slides.find('li').swipeLeft=function(e){
		move(this,'next');
		e.stopPropagation();
	}
	$slides.find('li').swipeRight=function(e){
		move(this,'prev');
		e.stopPropagation();
	}*/
		
	
})