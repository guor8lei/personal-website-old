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


$(".logo").hover(
	function() {$(this).fadeTo("fast", 0.7);},
	function() {$(this).fadeTo("fast", 1);});

$("#nih").hover(
	function() {
		$("#nih").fadeTo("fast", 0.3);
		$("#nih_caption").fadeTo("fast", 1);
	},
	function() {
		$("#nih").fadeTo("fast", 1);
		$("#nih_caption").fadeTo("fast", 0);
	});

$("#website").hover(
	function() {
		$("#website").fadeTo("fast", 0.3);
		$("#web_caption").fadeTo("fast", 1);
	},
	function() {
		$("#website").fadeTo("fast", 1);
		$("#web_caption").fadeTo("fast", 0);
		
	});

$(document).ready(function () {
    $(".navigation").hover(
    	function () {
        	$(".navigation").fadeTo('fast',1);
        },
        function () {
        	if (document.documentElement.scrollTop!=0) {
        		$(".navigation").fadeTo('fast',0);}
        	}
        );
});

$(function() {
	var $msg = $('#first_title');
	var $word_list = $('#first_title').text().split("");
  	$('#first_title').text("");
 	$.each($word_list, function(idx, elem) {
    	var new_elem = $("<span/>").text(elem).css({
      		opacity: 0
    	});
    	new_elem.appendTo($msg);
    	new_elem.delay(idx * 70);
    	new_elem.fadeTo('slow',1);
 	});

	setTimeout(function() {
		$('#second_title').fadeTo('slow',1);
	}, 2000);
  

});
