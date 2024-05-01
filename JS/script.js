$(document).ready(function(){
	$(".slider").slick({
		dots:true,
		speed:400,
		autoplay:true,
		autoplaySpeed:5000,
		draggable:false,
		waitForAnimate:false,
	});
});

$(document).ready(function(){
	$(".clients__slider").slick({
		dots:true,
		speed:400,
		autoplay:true,
		autoplaySpeed:5000,
		draggable:false,
		waitForAnimate:false,
		slidesToShow:4,
		slidesToScroll:4,
	});
});

$(document).ready(function () {
	$('.carousel').slick({
	dots:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1500,
	appendArrows:$('.carousel-arrows'),
	appendDots:('.carousel-dots'),
	responsive: [{
	breakpoint: 850,
	settings: {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	}
	}]
	});
});

$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
	});
	$('body').toggleClass('lock');
})