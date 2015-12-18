var window_width_before = $(window).width();

var menu_out = function (){
	$("div.mubu").css({"left":$("div.menubox").width(),"width":$(window).width()-$("div.menubox").width(),"z-index":99});
	$("div.menubox").animate({left:"0"},1000,function(){$("div.mubu").animate({opacity:0.8},500);});
	$(document.body).css("overflow","hidden");
};
var menu_exit =function (){
	$(document.body).css("overflow","visible");
	$("div.menubox").animate({left:$("div.menubox").width()*-1},1000);
	$("div.mubu").animate({opacity:0},1000,function(){$("div.mubu").css({"left":$("div.mubu").css("left")*-1,"z-index":0});})
};
var initi =function (){
	$("div.head").css({"width":$(window).width(),"height":$(window).height()*0.125});
	$("div.menubox,.mubu").css({"width":$(window).width()*0.2,"height":$(window).height(),"left":$("body").width()*0.2*-1});
	$("img.exit").css({"width":$("div.menubox").width()*0.2,"height":$("div.menubox").height()*0.08});
	$("div.mubu").css({"width":$(window).width()-$("div.menubox").css("width"),"height":$(window).height(),"left":$(window).width()*0.2*-1});
	$("div.main").css({"widnth":$(window).width(),"height":$(document).height(),"position":"relative","top":0});
	
	};
var mb_scroll = function (){
	
	$(".menubox,.mubu,.menu").css({"top":$(document).scrollTop()});	
	};
var tc = function (element){
	var size = $(element).children(".tanchu").children("span").css("font-size");
	$(element).children(".tanchu").animate({height:size},500);
	$(element).children(".tanchu").css("width",$(element).children(".tanchu").children("span").width()*2);
	$(element).children(".tanchu").children("span").animate({opacity:"1"},200);		 
	};
var re_size= function (){  
	top=0;
	$("div.menubox,.mubu").each(function() {
	var tag = $(this);
	var this_left = parseInt($(tag).css("left"));
	var this_window_width = $(window).width();
    $(tag).css({"width":$(tag).width()/window_width_before*$(window).width()
		 ,"height":$(tag).parent(window).height()
		 ,"top":top,"left":this_left/window_width_before*this_window_width});});
	$("div.head").css({"width":$(window).width()});
	window_width_before = $(window).width();
	$('html,body').animate({scrollTop: '0px'}, 1000);	
	$("body").scrollTop = $(document).width();
};
var creatDiv = function(dir_count){
	
};