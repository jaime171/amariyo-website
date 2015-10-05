$(function(){

	// $('.simple-ajax-popup-align-top').magnificPopup({
	// 	type: 'ajax',
	// 	alignTop: true,
	// 	overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	// });

	// $('.simple-ajax-popup').magnificPopup({
	// 	type: 'ajax'
	// });
	
	var butonCount = 0;
	$(".section-menu").click(function(){

		var lightbox = $(".lightbox-menu"),
		firstBar = $("#line-1"),
		secondBar = $("#line-2"),
		thirdBar = $("#line-3");
		firstBar.addClass("section-menu-rotation section-menu-time ");
		thirdBar.addClass("section-menu-rotation-back section-menu-time ");
		secondBar.fadeOut("fast");
		$(this).css('z-index', 1000);
		$(this).css({"opacity": 1});
		// //lightbox.animate({width:'toggle'},800);
		// //lightbox.slideDown(800);
		lightbox.fadeIn(700);
		console.log(butonCount);
		butonCount += 1;
		console.log(butonCount);
		if(butonCount > 1){
			butonCount = 1;
			//lightbox.slideUp(800);
			lightbox.fadeOut(700);
			firstBar.toggleClass("section-menu-rotation section-menu-time ");
		 	thirdBar.toggleClass("section-menu-rotation-back section-menu-time ");
			secondBar.fadeIn("slow");
			butonCount--;
		}	
	});
	$(".items").mouseenter(function(){
		$(this).children().fadeIn("fast");	
	});
	$(".items").mouseleave(function(){
		$(this).children().fadeOut("fast");
	});




});


	// $(".items").mouseenter(function(){
	// 	//$(this).children().fadeIn("fast");
	// $(".items").mouseenter(function(){
	// 	//$(this).children().fadeIn("fast");	
	// 	var item = $(this).find("h4");
	// 	var itemWidth = $(item)
	// 	var width = $(itemWidth).width() / 2;
		
	// 	itemWidth.css("margin-left" , -width);
		
	//	console.log(width)
	// 	// $(this).wrapInner( "<span class='new-item'></span>").css( "background-color", "red" );
	// 	var item = $(this).find("h4");
	// 	console.log(item)
	// 	$(item).wrapInner( "<span class='new-item'></span>").css( "background-color", "blue" );
	// 	// var width = $(".new-item").width();
	// 	// console.log(width)
	// });
	// $(".items").mouseleave(function(){
	// 	$(this).children().fadeOut("fast");
	// });
	// // var  item = $( ".items" )first().css( "background-color", "red" );
	// //.wrapInner( "<span class='new-item'></span>").width();
	// // console.log(item)















