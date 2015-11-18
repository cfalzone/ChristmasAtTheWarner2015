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

function RepositionNav() {
	var windowHeight = $(window).height(); //get the height of the window
	var navHeight = $('#nav').height() / 2;
	var windowCenter = (windowHeight / 2); 
	var newtop = windowCenter - navHeight;
	$('#nav').css({"top": newtop}); //set the new top position of the navigation list
}