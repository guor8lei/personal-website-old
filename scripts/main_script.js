/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});

//END hoverIntent

$(".logo").hoverIntent(
	function() {$(this).fadeTo(150, 0.5);},
	function() {$(this).fadeTo(150, 1);});

$(".link").hoverIntent(
	function() {
		$(this).fadeTo(150, 0.5);
		$(this).css('text-decoration', 'none');
	},
	function() {
		$(this).fadeTo(150, 1);
		$(this).css('text-decoration', 'none');
	}
);

$(".menu_item").hoverIntent(
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

$("#email_tooltip").hoverIntent(
	function() {
		$("#email_tooltiptext").show(300);
	},
	function() {
		$("#email_tooltiptext").hide(300);
	}
);

$("#resume_tooltip").hoverIntent(
	function() {
		$("#resume_tooltiptext").show(300);
	},
	function() {
		$("#resume_tooltiptext").hide(300);
	}
);

$("#linkedin_tooltip").hoverIntent(
	function() {
		$("#linkedin_tooltiptext").show(300);
	},
	function() {
		$("#linkedin_tooltiptext").hide(300);
	}
);

$("#github_tooltip").hoverIntent(
	function() {
		$("#github_tooltiptext").show(300);
	},
	function() {
		$("#github_tooltiptext").hide(300);
	}
);

$("#fb_tooltip").hoverIntent(
	function() {
		$("#fb_tooltiptext").show(300);
	},
	function() {
		$("#fb_tooltiptext").hide(300);
	}
);
