// (function($, undefined) {
    
// })(jQwery);

var $topMenu = $('#main-menu');

$(document).ready(function() {

	//Плавная прокрутка к определённой секции по клику на меню навигации
	$('.menu__list').on('click', '.menu__link', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 800);
		
		$('.menu__link.active').removeClass('active');
	  $(this).addClass('active');
	  if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}
	});

	//Плавная прокрутка при клике на лого 
	$('.logo, .first-slide__next-link').on('click', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 800);
		
		// $('.menu__link.active').removeClass('active');
	 //  $(this).addClass('active');
	  if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}
	});
	// Конец Плавная прокрутка

	
	if ($(window).width() > 768) {
		// Анимация с WOW. Инициализация плагина.
		new WOW().init();
	}

});

// Функция для подсветки активного пункта меню при прокрутке
function onScroll(){
	var scroll_top = $(window).scrollTop();
	
	$(".menu__link").each(function(){
		var link = $(this).attr("href");
		var target = $(link);

		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(".menu__link").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}


$(window).scroll(function() {
	onScroll ();


	var distAbout = $('#about_us').offset().top;
	if ($(window).scrollTop() >= distAbout) {
		$('.header').css('background', 'rgba(255,255,255,0.85)');
	} else {
		$('.header').css('background', 'transparent');
		}
});


// == For responsive MENU == 
$('#show_menu').on('click', function () {	
	 if ($topMenu.hasClass('open') ) {
	 		$topMenu.removeClass('open');
	 		$(this).removeClass('open');
	 }
	 else{
	 		$topMenu.addClass('open');
	 		$(this).addClass('open');
	 }
});

$(window).resize(function(){
	if ($(window).width() > 768) {
		$topMenu.removeClass('animation')
			      .removeClass('open');
		$('#show_menu').removeClass('open');
		// Анимация с WOW. Инициализация плагина.
		new WOW().init();
	}
	else {
		$topMenu.addClass('animation');
	}

});




