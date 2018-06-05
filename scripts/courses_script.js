$(".link").hover(
	function() {$(this).fadeTo(300, 0.5);},
	function() {$(this).fadeTo(300, 1);});

$(".menu_item").hover(
	function() {
		$(this).fadeOut(100, function() {
			$(this).css('background-color', 'black');
			$(this).css('color', 'white');
			$(this).fadeTo(100, 1);
		});
	},
	function() {
		$(this).fadeOut(100, function() {
			$(this).css('background-color', 'white');
			$(this).css('color', 'black');
			$(this).fadeTo(100, 1);
		});
});

$(function() {
	$("#navbar").hover(
		function () {
				$("#navbar").fadeTo('fast',1);
			},
			function () {
				if (document.documentElement.scrollTop!=0) {
					$("#navbar").fadeTo('fast',0);}
				}
			);
});
