$(".logo").hover(
	function() {$(this).fadeTo(150, 0.5);},
	function() {$(this).fadeTo(150, 1);});

$(".link").hover(
	function() {
		$(this).fadeTo(150, 0.5);
		$(this).css('text-decoration', 'none');
	},
	function() {
		$(this).fadeTo(150, 1);
		$(this).css('text-decoration', 'none');
	}
);

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

$("#email_tooltip").hover(
	function() {
		$("#email_tooltiptext").show(300);
	},
	function() {
		$("#email_tooltiptext").hide(300);
	}
);

$("#resume_tooltip").hover(
	function() {
		$("#resume_tooltiptext").show(300);
	},
	function() {
		$("#resume_tooltiptext").hide(300);
	}
);

$("#linkedin_tooltip").hover(
	function() {
		$("#linkedin_tooltiptext").show(300);
	},
	function() {
		$("#linkedin_tooltiptext").hide(300);
	}
);

$("#github_tooltip").hover(
	function() {
		$("#github_tooltiptext").show(300);
	},
	function() {
		$("#github_tooltiptext").hide(300);
	}
);

$("#fb_tooltip").hover(
	function() {
		$("#fb_tooltiptext").show(300);
	},
	function() {
		$("#fb_tooltiptext").hide(300);
	}
);
