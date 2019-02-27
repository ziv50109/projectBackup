(function() {
$.fx.interval = 60;
//判斷IE，使用陽春版svg箭頭動畫(IE目前不支援svg animation)
function ieSvgAnimation() {
	setTimeout(function() {
		$('.stroke1, .stroke2').addClass('ieSvgAnimation');
		setTimeout(function() {
			$('.stroke1, .stroke2').removeClass('ieSvgAnimation');
			ieSvgAnimation();
		}, 650);
	}, 650);
}
if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
	ieSvgAnimation();
}

//PC寬度過小，對上方選單做處理
$(window).scroll(function() {
	$('.nav').css('left', 0 - $(this).scrollLeft());
});

//網頁load完跑動畫
$(window).load(function() {
	$("body").removeClass("pageload");
	setTimeout(function() {
		$('*').removeClass('readyShow');
		$('*').removeClass('readyShowNT');
		$('*').removeClass('readyTextShow');
		setTimeout(function() {
			$('*').removeClass('delayShow');
			$('*').removeClass('readyDelayShow');
			setTimeout(function() {
				$('*').removeClass('readyDelayTextShow');
			},200);
		},300);
	},10);
});

$(document).ready(function() {

	//--------------------基金知識通測驗--------------------
	var rdmArray = [0,1,2,3,4,5],
		oldArray = [],
		exist,
		rdm;

	function randomNum() {
		for (var i = 0; i <= 5; i++) {
			do {
				//假設亂數不存在
				exist = false;
				//產生0~6亂數
				rdm = Math.floor( Math.random() * 6);
				//亂數不存在寫入陣列
				if ($.inArray( rdm, rdmArray ) !== -1) {
					exist = true;
				}
			} while (exist);
			rdmArray[i] = rdm;
		}
		checkArray();
		return rdmArray;
	}

	//如果新陣列第一項 = 舊陣列最後一項，新陣列第一、二項對調
	function checkArray() {
		if(oldArray[5] === rdmArray[0]) {
			var i = rdmArray[1];
			rdmArray[1] = rdmArray[0];
			rdmArray[0] = i;
		}
	}

	//下一題
	$('body').on('click', '.answerOption', function() {
		$(this).parents('.qaBox').addClass('published');
	});
	var i = 0;
	$('body').on('click', '.next', function() {
		i++;
		if(i > 5) {
			oldArray = rdmArray;
			rdmArray = [];
			randomNum();
			i = 0;
			$('.qaBox').removeClass('published');
		}
		$('.qaWrap').removeClass('show');
		$('.qaWrap').eq(rdmArray[i]).addClass('show');
	});
	//--------------------基金知識通測驗--------------------

	$('.videoBox').on('click', function() {
		var videoIndex = ($(this).parents('.video').index() - 1) * 2 + $(this).parents('.box').index();
		$('.videoPopup').show();
		player.loadVideoById(lists[videoIndex]);
	});

	$('.close').on('click', function() {
		$('.videoPopup').hide();
		player.stopVideo();
	});

});

//hashtag
if (document.location.hash.search('watchrdr') !== -1) {
	$(window).load(function() {
		setTimeout(function() {
			$('.rb a').trigger('click');
			$('.rdr a').trigger('click');
		},1000);
	});
}





 var runMan = function() {
	var runMan = $('.goBuy .run');
		runMan.removeClass('run3');
		runMan.addClass('run1');
	setTimeout(function () {
		runMan.removeClass('run1');
		runMan.addClass('run2');
		setTimeout(function () {
			runMan.removeClass('run2');
			runMan.addClass('run3');
		},250);
	},250);
};
setInterval(function(){
	runMan();
},750);


}());

