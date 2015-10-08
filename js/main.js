$(document).ready(function() {
	RepositionNav();
	
	$(window).resize(function() {
		RepositionNav();
	});

	$('#home').parallax("50%", 0, 0.1, true);
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});
});
