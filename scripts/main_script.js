$(".logo").hover(
	function() {$(this).fadeTo(200, 0.5);},
	function() {$(this).fadeTo(200, 1);});

$(".link").hover(
	function() {$(this).fadeTo(300, 0.5);},
	function() {$(this).fadeTo(300, 1);});

$(".menu_item").hover(
	function() {
		$(this).fadeOut(150, function() {
			$(this).css('background-color', 'black');
			$(this).css('color', 'white');
			$(this).fadeTo(100, 1);
		});
	},
	function() {
		$(this).fadeOut(150, function() {
			$(this).css('background-color', 'white');
			$(this).css('color', 'black');
			$(this).fadeTo(100, 1);
		});
});

$("#about_button").click(function() {
	var position = $("#about").offset().top;
  $("HTML, BODY").animate({
    scrollTop: position
  }, 2000);
});

$("#home_button").click(function() {
	$("HTML, BODY").animate({
			scrollTop: 0
	}, 2000);
});
