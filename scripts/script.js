var main = function () 
{
  "use strict";
 
  $(".parallax-window").height($(window).height());
	$("a").on("click", function()
	{
		var data = $(this).data('par');
		$(".myself").addClass("hidden");
		 $(".visible").removeClass("visible");
		 $(data).addClass('visible');
		
	});
	$(window).resize(function()
	{
		
		$(".parallax-window").height($(window).height());
		
		
	});
var fade = 2000;
var stay = fade*3;
var setVisible = function(current,to)
	{
		$(current).fadeOut(fade, function()
				{
					$(current).removeClass("visible");
					$(current).addClass("hidden");
					
					$(to).fadeIn(fade, function()
					{
						$(to).removeClass("hidden");
						$(to).addClass("visible");
					});
					
				});
	}
var index = 0;
var fotocount = 6;
var intervalfunction = function()
	{
	var currentfoto = index;
	var tofoto = index==fotocount-1?0:index+1;
	/*
	(is hetzelfde als):
	if(index==fotocount-1)
	{
		tofoto=0;
	}
	else
	{
		tofoto = index+1;
	}*/
	var cfstring = ".foto"+currentfoto;
	
	var tostring = ".foto"+tofoto;
	
	//setvisible
	setVisible(cfstring,tostring);
	
	index = index==fotocount-1 ? 0 : index+1;
	
	/*
	(is hetzelfde als):
	if(index==fotocount-1)
	{
		index=0;
	
	}
	else {
		index=index+1;
	}
	*/
	
	//if ($(".foto0").hasClass("visible")){
//			
//		setVisible(".foto0",".foto1");
//	}
//	
//	else if ($(".foto1").hasClass("visible"))
//	{
//		setVisible(".foto1",".foto2");
//	}
//	
//	else
//	{
//		setVisible(".foto2",".foto0");	
//	}
 	}
var interval = setInterval( intervalfunction, stay);
}

$("document").ready(main);