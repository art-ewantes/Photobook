(function() {
	'use strict';
	$(window).ready(function(){
		// var initialTopOffset = $('.main-header').offset().top;
		$("section").has(".animated").css("opacity", "0");

		$(window).scrollToId("after-header", "zoomIn");
		$(window).scrollToId("stage", "bounceInLeft");
		$(window).scrollToId("advantage", "rollIn");
		$(window).scrollToId("ready-solution", "zoomIn");
		$(window).scrollToId("description-service", "zoomIn");
		
		
	});
	

})();
