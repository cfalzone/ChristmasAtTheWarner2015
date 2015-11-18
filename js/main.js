$(document).ready(function() {
	RepositionNav();
	
	$(window).resize(function() {
		RepositionNav();
	});
	
	$('#nav').localScroll({
		queue:true,
		duration:1000,
		hash:true,
	});

	$('#nav a').click(function() {
		$('#nav a').removeClass('active');
		$(this).addClass('active');
	});
});

function RepositionNav() {
	var windowHeight = $(window).height(); //get the height of the window
	var navHeight = $('#nav').height() / 2;
	var windowCenter = (windowHeight / 2);
	var newtop = windowCenter - navHeight;
	$('#nav').css({"top": newtop}); //set the new top position of the navigation list
}