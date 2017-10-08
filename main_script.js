$(".nav_element").hover(
	function() {$(this).css('background-color', '#253f3f');},
	function() {$(this).css('background-color', '#000000');});

$("#nav_home").click(function() {
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 1000);
});

$("#nav_about").click(function() {
	var position = $("#about").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
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



