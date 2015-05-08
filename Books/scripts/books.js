var main = function () {
  "use strict";
  
    $(".parallax-window").height($(window).height());

		$(window).resize(function()
				{
					
					$(".parallax-window").height($(window).height());
					
					
				});

}

$("document").ready(main);