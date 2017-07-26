$(function(){
	var toggleMenu = $('#toggle-menu');
	var nav = $('#main-nav');
	var divClose = $('#close');
	var close = $('#btn_cerrar');
	var contador = 0; 
	toggleMenu.on('click', function(){
		nav.removeClass('main-nav__hide') .addClass('main-nav__show');
		divClose.removeClass('close__hide').addClass('close__show');

	});
	close.on('click', function(){
		nav.removeClass('main-nav__show') .addClass('main-nav__hide');
		divClose.removeClass('close__show').addClass('close__hide');
	});

});