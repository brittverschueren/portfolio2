var main = function () {
	"use strict";
	var numberOfPhotos = 9;
	var swapTime = 5000;
	$(".parallax-window").height($(window).height());
	$(window).resize(function()
		{
			$(".parallax-window").height($(window).height());
		});
	var fotoIDs = [];
	//id's vullen
	for(var i=0;i<numberOfPhotos;i++)
	{
		fotoIDs.push("#foto"+i);
	}
	var fotos = [];
	for(var i=0;i<numberOfPhotos;i++)
	{
		fotoIDs.push("images/img"+i+".jpg");
	}	
	var switchfotos = function(f1,f2){
		$(f1).fadeOut(swapTime/3);
		$(f2).fadeOut(swapTime/3,function(){
			var tmp=$(f1).prop("src");
			$(f1).attr("src",$(f2).attr("src"));
			$(f2).attr("src",tmp);
			$(f1).fadeIn(swapTime/3);
			$(f2).fadeIn(swapTime/3);
			});
		
	}		
	var intervalfunction = function()
	{		
		var randomOne = "#foto"+Math.floor((Math.random() * numberOfPhotos));
		var randomTwo = "#foto"+Math.floor((Math.random() * numberOfPhotos));
		if(randomOne!=randomTwo)
			switchfotos(randomOne,randomTwo);
		else
			intervalfunction();
	}
	var interval = setInterval( intervalfunction, swapTime);
}

$("document").ready(main);