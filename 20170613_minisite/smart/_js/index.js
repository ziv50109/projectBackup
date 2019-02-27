/*jshint esversion: 6 */
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
//初始化
function init() {
	//to top
	setTimeout(()=>$(window).scrollTop(0));
	//第一區塊輪播
	$('.section_1 .slide_box').css({
		'left': 0,
		'opacity': 0,
		'z-index': 2
	});
	$('.section_1 .slide_box.active').css({
		'opacity': 1
	});
}


//WIN10 IE11 背景跳動解決方法
if(navigator.userAgent.match(/Trident\/7\./)) {
	document.body.addEventListener("mousewheel", function() {
		event.preventDefault();
		var wd = event.wheelDelta;
		var csp = window.pageYOffset;
		window.scrollTo(0, csp - wd);
	});
}





//popup close
$('.popup-close').on('click', function() {
	$('.popup_content').removeClass('active');
	$('.popup_wrap').removeClass('open');
	indiaPopupInit();
});
//印度不思議popup初始化
function indiaPopupInit() {
	$('.popup_content.india').attr('class', 'popup_content india');
}







//抓取背景定位&背景置中的值
function bg() {
	let centerBg,
		bgPosition;
	//總高度與背景圖寬度的比例
	bgPosition = $(window).scrollTop() * 1.7;
	//防止網下捲到爆版
	// if(bgPosition > 7317) {
	// 	bgPosition = 7317;
	// }
	let mobileheight = 0;
	if($(window).width() <= 640) {
		mobileheight = (1044 - $('.section_0').height()) * -1.7;
	} else {
		mobileheight = 0;
	}
	//讓大團色塊保持置中
	if($(window).width() <= 1903) {
		centerBg = (1903 - $(window).width()) / 2;
	}
	$('.bg').css({
		'background-position-X': 'calc(100vw - ' + (bgPosition - centerBg - mobileheight) + 'px)'
	});
}
//首頁捲動
function section0Scroll() {
	let kvOpacity = 1 - $(window).scrollTop()*2.4 / $('.section_0').height();
	if(kvOpacity < 0) {
		kvOpacity = 0;
	}
	if($(window).scrollTop() < $('.section_0').height()) {
		$('.kv_wrap').css({
			'opacity': kvOpacity
		});
	} else {
		$('.kv_wrap').css({
			'opacity': 0
		});
	}
	//flex_box解除「等待 kv 動畫完畢」的class(z-index:1)
	if($(window).scrollTop() > 200) {
		$('.fixed_box').removeClass('waitAnimation');
	}
}
//把區塊位置寫入陣列
var sectionArr = [];
for(let i of $('.section')) {
	sectionArr.push($(i).offset().top);
}
function sectionBg() {
	let scroll = $(window).scrollTop();
	sectionArr.map((value, index) => {
		if(scroll > sectionArr[4]) {
			if(scroll > value - 500) {
			$('.section').eq(index).removeClass('animate');
		}
		}
		//滑到每一區塊 -180 高度觸發動畫
		if(scroll > value - 180) {
			//if(scrollGoTo) { scrollToSection(value, index); }
			$('.section').eq(index).removeClass('animate');
			setTimeout(() => {
				$('.section').eq(index).find('.bg2').addClass('big');
			},1500);
		}
		//console.log(scroll, value, index)
		//scrollGoTo = true;
	});
}






//左邊區塊
//left_box dot
function changeDot() {
	//滑動的改變
	let scroll = $(window).scrollTop(),
		dot = $('.pageDot_wrap .dot');
	sectionArr.map((value, index) => {
		if(scroll > value - 100) {
			dot.removeClass('active');
			dot.eq(index).addClass('active');
		}
	});
}
//dot 點擊的改變
$('.pageDot_wrap .dot').on('click', function() {
	let index = $(this).index(),
		prevIndex = $('.active').index(),
		speed = Math.abs(index - prevIndex) * 500;
	$('body,html').animate({
		scrollTop: sectionArr[index]
	}, speed + 100);
});


//印度不思議
$('.btn_wrap .btn2').on('click', function() {
	$('.popup_content.india').addClass('active popup_0').css('top', $(window).scrollTop() + 80);
	$('.popup_wrap').addClass('open');
	$('body').removeClass('noscroll');
	canScroll = true;
	$('body').off('touchmove');
});
//印度不思議 點選
var indiaPopupNowIndex = 0;
$('.popup_content.india .item').on('click', function() {
	indiaPopupInit();
	let index = $(this).index()+1;
	indiaPopupNowIndex = index;
	$('.popup_content.india').addClass('active popup_'+index);
	$('body,html').animate({
		scrollTop: $('.popup_box').offset().top - 80
	}, 500);
});
//印度不思議 prev
$('.popup_content.india .prev').on('click', function() {
	if(indiaPopupNowIndex === 1) {
		indiaPopupNowIndex = 1;
	} else {
		indiaPopupNowIndex--;
	}
	indiaPopupInit();
	$('.popup_content.india').addClass('active popup_'+indiaPopupNowIndex);
});
//印度不思議 next
$('.popup_content.india .next').on('click', function() {
	if(indiaPopupNowIndex === 4) {
		indiaPopupNowIndex = 4;
	} else {
		indiaPopupNowIndex++;
	}
	indiaPopupInit();
	$('.popup_content.india').addClass('active popup_'+indiaPopupNowIndex);
});




//手機板選單
$('.hamburger').on('click', function() {
	$(this).parent('.head_wrap').toggleClass('open');
	$('.menu_wrap').fadeToggle(333);
	$('body').removeClass('noscroll');
	canScroll = true;
	$('body').off('touchmove');
});
//手機板各區塊移動
$('.toS').on('click', function() {
	$('.menu_wrap').fadeOut();
	$(this).parents('.fixed_box').find('.head_wrap').removeClass('open');
	let index = $(this).parents('.item').index(),
		prevIndex = $('.item.active').index(),
		speed = Math.abs(index - prevIndex) * 500;

	$('.menu_box .item').removeClass('active');
	$(this).parents('.item').addClass('active');

	$('body,html').animate({
		scrollTop: sectionArr[index]
	}, speed + 100);
});
//手機板第二層選單
$('.item').eq(4).on('click', function() {
	$(this).toggleClass('open');
});







//第零區塊scroll-icon click
$('.scroll-icon').on('click', function() {
	$('.fixed_box .dot2').trigger('click');
	$('body').removeClass('noscroll');
	canScroll = true;
	$('body').off('touchmove');
});
//熱銷銀行
$('.section_0 .sellWell').on('click', function() {
	$('.popup_content.sellWell').addClass('active').css('top', $(window).scrollTop() + 80);
	$('.popup_wrap').addClass('open');
	$('body').removeClass('noscroll');
	canScroll = true;
	$('body').off('touchmove');
});






//第一區塊的slider
var lastSlider = $('.section_1 .slide_box').length - 1;
$('.section_1 .prev, .section_1 .next').on('click', function() {
	let index = $(this).index(),
		slideActive = $('.section_1 .slide_box.active').index(),
		direction;
	if(index == 1) {
		//prev
		direction = slideActive-1;
	} else {
		//next
		direction = slideActive+1;
	}
	section1Change(direction, slideActive);
});
$('.section_1 .dot').on('click', function() {
	var index = $(this).index(),
		prevIndex = $('.section_1 .dot.active').index();
	section1Change(index, prevIndex);
});
function section1Change(val, prev) {
	let sliderBox = $('.section_1 .slide_box'),
	direction = '';
	if(val < 0 || val > lastSlider || val === prev) {
		return;
	}
	if(val > prev) {
		direction = '30%';
	} else {
		direction = '-30%';
	}
	$('.section_1 .slide_box.active').animate({
		'left': direction,
		'opacity': 0,
	}, 260, function() {
		//定位新的卡片
		sliderBox.css('left', 0);
		sliderBox.removeClass('active');
		//顯示新的卡片
		setTimeout(() => {
			sliderBox.eq(val).addClass('active').animate({
				'opacity': 1,
			},260);
		},150);
	});
	$('.section_1 .dot').removeClass('active');
	$('.section_1 .dot').eq(val).addClass('active');
}
//手機版圖表popup
$('.section_1 .chart-icon_box').on('click', function() {
	let index = $(this).parents('.slide_box').index();
	$('.popup_content.section_1-chart').attr('class', 'popup_content section_1-chart active');
	$('.popup_content.section_1-chart').addClass('popup_' + (index+1)).css('top', $(window).scrollTop());
	$('.popup_wrap').addClass('open');
});







//手機版圖表popup
$('.section_3 .chart-icon_box').on('click', function() {
	$('.popup_content.section_1-chart').attr('class', 'popup_content section_1-chart active');
	$('.popup_content.section_1-chart').addClass('popup_5').css('top', $(window).scrollTop());
	$('.popup_wrap').addClass('open');
});








//第四區塊的slider
var s4lastSlider = $('.section_4 .slide_box').length - 1;
$('.section_4 .prev, .section_4 .next').on('click', function() {
	let index = $(this).index(),
		slideActive = $('.section_4 .slide_box.active').index(),
		direction;
	if(index == 1) {
		//prev
		direction = slideActive-1;
	} else {
		//next
		direction = slideActive+1;
	}
	section4Change(direction, slideActive);
});
$('.section_4 .item').on('click', function() {
	var s4index = $(this).index(),
		s4prevIndex = $('.section_4 .item.active').index();
	section4Change(s4index, s4prevIndex);
});
function section4Change(val, prev) {
	let sliderBox = $('.section_4 .slide_box');
	if(val < 0 || val > s4lastSlider || val === prev) {
		return;
	}
	sliderBox.removeClass('active');
	sliderBox.eq(val).addClass('active');
	$('.section_4 .content-wrap .item').removeClass('active');
	$('.section_4 .content-wrap .item').eq(val).addClass('active');
}
$('.content-default .item').on('click', function() {
	let index = $(this).index();
	$('.content-default').addClass('hide');
	section4Change(index);
});


$('.back-icon').on('click', function() {
	$(this).parents('.section_4').find('.content-default').removeClass('hide');
});







//video popup
$('.content-wrap .pic').on('click', function() {
	var videoIndex = $(this).parents('.slide_box').index();
	$('.video_popup').fadeIn();
	player.loadVideoById(lists[videoIndex]);
});
$('.video_popup .close').on('click', function() {
	player.stopVideo();
	$('.video_popup').fadeOut();
});









$(window).load(function() {
	$.fx.interval = 60;
	init();
	inddexNoScroll();
	if($(window).width() <= 640) {
		$('body').addClass('noscroll');
	}
	bg();
	//開場動畫
	$('.fixed_box, .section_0').removeClass('animate');
	setTimeout(()=>{$('.fixed_box').removeClass('waitAnimation');},2300);
});
$(window).on('scroll', function() {
	bg();
	section0Scroll();
	sectionBg();
	changeDot();
	//head nav過section0背景變白色
	if($(window).width() <= 960) {
		if($(window).scrollTop() > $('.section_0').height()) {
			$('.head_wrap').css('background-color', 'rgba(255,255,255,1)');
		} else {
			$('.head_wrap').attr('style', false);
		}
	}
});
$(window).on('resize', function() {
	bg();
	inddexNoScroll();
	//重新抓取各區塊位置
	sectionArr = [];
	for(let i of $('.section')) {
		sectionArr.push($(i).offset().top);
	}
});







var lastY;
function inddexNoScroll() {

	$('body').on('scroll touchmove', function(e) {
		let newY = e.originalEvent.touches ?  e.originalEvent.touches[0].pageY : e.pageY;
		if(newY > lastY) {
			return;
		} else {
			$('body').removeClass('noscroll');
			setTimeout(()=>{
				$('body,html').animate({
					scrollTop: sectionArr[1]
				}, 1000);
			},10);
			$('body').off('touchmove');
		}
		lastY = e.originalEvent.touches ?  e.originalEvent.touches[0].pageY : e.pageY;
	});

}

var canScroll = false;
$('body').on('mousewheel', function(event) {
	if (!canScroll && event.deltaY < 0) {
		$('body').removeClass('noscroll');
		setTimeout(()=>{
			$('body,html').animate({
				scrollTop: sectionArr[1]
			}, 1000);
		},10);
		canScroll = true;
	} else {
		return;
	}
});


$('.next-icon').on('click', function() {
	let index = $(this).parents('.section').index();
	if(index == 4) {
		index = 99;
		$('.btn_wrap .btn2').trigger('click');
	}
	$('body,html').animate({
		scrollTop: sectionArr[index+1]
	}, 1000);
});