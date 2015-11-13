$(document).ready(function() {
	RepositionNav();
	
	$(window).resize(function() {
		RepositionNav();
	});
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});
});
