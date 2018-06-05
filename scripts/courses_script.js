$(".link").hover(
	function() {
		$(this).children().fadeTo(150, 0.5);
	},
	function() {
		$(this).children().fadeTo(150, 1);
	});

$(".menu_item").hover(
	function() {
		$(this).fadeOut(150, function() {
			$(this).css('background-color', 'black');
			$(this).css('color', 'white');
			$(this).fadeTo(150, 1);
		});
	},
	function() {
		$(this).fadeOut(150, function() {
			$(this).css('background-color', 'white');
			$(this).css('color', 'black');
			$(this).fadeTo(150, 1);
		});
});

$(function () {
	var $win = $(window);
	$win.scroll(function () {
    if ($win.scrollTop() <= 100) {
      $("#navbar").hide(500);
    } else {
      $("#navbar").show(500);
    }
  });
});
