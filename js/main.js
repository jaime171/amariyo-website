$(function(){
	//$(".section-menu").fadeIn(2500);
var butonCount = 1;
	$(".section-menu").click(function(){
		var lightbox = $(".lightbox-menu"),
		firstBar = $("#line-1"),
		secondBar = $("#line-2"),
		thirdBar = $("#line-3");
		$(this).css('z-index', 1000);
		$(this).css({"opacity": 1});
		// lightbox.animate({width:'toggle'},800);
		lightbox.slideDown(800);
		// lightbox.fadeIn(800);
		firstBar.addClass("section-menu-rotation section-menu-time ");
		thirdBar.addClass("section-menu-rotation-back section-menu-time ");
		secondBar.fadeOut("fast");
		butonCount++;
		if(butonCount > 2){
			butonCount = 2;
			lightbox.slideUp(800);
			// lightbox.fadeOut(800);
			firstBar.toggleClass("section-menu-rotation section-menu-time ");
			thirdBar.toggleClass("section-menu-rotation-back section-menu-time ");
			secondBar.fadeIn("slow");
			butonCount--;
		}
	

		


















			// switch ($(".section-menu[id='1']")){

			// }
			// if($(".section-menu[id='1']")){
			// 	$(this).css('z-index', 1000);
			// 	$(this).css({"opacity": 1});
			// 	lightbox.slideDown(800);
			// 	firstBar.addClass("section-menu-rotation section-menu-time ");
			// 	thirdBar.addClass("section-menu-rotation-back section-menu-time ");
			// 	secondBar.fadeOut("fast");
			// 	butonCount++
			// 	$(".section-menu").attr("id",butonCount);
			// 	// console.log($(".section-menu").attr("id", "div#+butonCount"));
			// } else if ($(".section-menu[id='2']")){
			// 	lightbox.slideup(800);
			// }
			// if(butonCount > 2){
			// 	butonCount = 1;
			// }
			

		
		}); //function 

});
























// window.onscroll = (function(e) {
//     parallaxScroll();
// });


// function parallaxScroll() {
//     var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
//     var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
//     var bgdiv = document.getElementById('parallax');
//     bgdiv.style.top = -(scrollTop * 0.1) + 'px';
// }