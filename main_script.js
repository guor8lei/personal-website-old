$(".logo").hover(
	function() {$(this).fadeTo(400, 0.5);},
	function() {$(this).fadeTo(400, 1);});

$(".link").hover(
	function() {$(this).fadeTo(400, 0.5);},
	function() {$(this).fadeTo(400, 1);});

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














$(".nav_element").hover(
	function() {$(this).css('background-color', '#253f3f');},
	function() {$(this).css('background-color', '#000000');});

$("#nav_home").click(function() {
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 1000);
});



$("#nav_projects").click(function() {
	var position = $("#projects").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
});

$("#nav_contact").click(function() {
	var position = $("#contact").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
});


$("#nih_wrap").hover(
	function() {
		$("#nih").fadeTo("fast", 0.2);
		$("#nih_des").fadeTo("fast", 1);
		$("#nih_lnk").fadeTo("fast", 1);
	},
	function() {
		$("#nih").fadeTo("fast", 1);
		$("#nih_des").fadeTo("fast", 0);
		$("#nih_lnk").fadeTo("fast", 0);
	});

$("#web_wrap").hover(
	function() {
		$("#website").fadeTo("fast", 0.2);
		$("#web_des").fadeTo("fast", 1);
		$("#web_lnk").fadeTo("fast", 1);
	},
	function() {
		$("#website").fadeTo("fast", 1);
		$("#web_des").fadeTo("fast", 0);
		$("#web_lnk").fadeTo("fast", 0);
	});

$("#cct_wrap").hover(
	function() {
		$("#cct").fadeTo("fast", 0.2);
		$("#cct_des").fadeTo("fast", 1);
		$("#cct_play").fadeTo("fast", 1);
		$("#cct_git").fadeTo("fast", 1);
	},
	function() {
		$("#cct").fadeTo("fast", 1);
		$("#cct_des").fadeTo("fast", 0);
		$("#cct_git").fadeTo("fast", 0);
		$("#cct_play").fadeTo("fast", 0);
	});
