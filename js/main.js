$(document).ready(function() {
	RepositionNav();
	
	$(window).resize(function() {
		RepositionNav();
	});

	//$('#home').parallax("50%", 0, 0.1, true);
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});

	var scrollorama = $.scrollorama({ blocks: '.slide' });

	scrollorama.animate('#home h2',{
		delay: 0,
		duration: 100,
		property: 'opacity',
		start: 0
	}).animate('#home h3', {
		delay: 5,
		duration: 200,
		property: 'opacity',
		start: 0
	}).animate('#tickets h3', {
		delay: 400,
		duration: 600,
		property: 'zoom',
		start: 2
	});
});
