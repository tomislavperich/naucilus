$(document).ready(function(){
	
	// Hide stuff
	$("#home_header center h1").hide();
	$("#home_header center h2").hide();
	$("#home_header").hide();
	
	// Show stuff slowly
	$("#home_header center h1").fadeIn(2000);
	$("#home_header center h2").fadeIn(2000);
	$("#home_header").fadeIn(2000);
	
	// Button Scroll
	$("#hbutton1").click(function() {
    $('html,body').animate({scrollTop: $("#category1").offset().top},'slow');
	});
	$("#hbutton2").click(function() {
    $('html,body').animate({scrollTop: $("#category2").offset().top},'slow');
	});
	$("#hbutton3").click(function() {
    $('html,body').animate({scrollTop: $("#category3").offset().top},'slow');
	});
	$("#hbutton4").click(function() {
    $('html,body').animate({scrollTop: $("#category4").offset().top},'slow');
	});
			// Scroll to top
	$("#gohome").click(function() {
    $('html,body').animate({scrollTop: $(".intro-header").offset().top},'slow');
	});
	
	// Category Scroll (Horizontal) 
	$("#r_arrow1").click(function() {
		$("#category1").animate({
			left: "-=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	$("#l_arrow1").click(function() {
		$("#category1").animate({
			left: "+=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	
	
	
	$("#r_arrow2").click(function() {
		$("#category2").animate({
			left: "-=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	$("#l_arrow2").click(function() {
		$("#category2").animate({
			left: "+=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	
	
	
	$("#r_arrow3").click(function() {
		$("#category3").animate({
			left: "-=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	$("#l_arrow3").click(function() {
		$("#category3").animate({
			left: "+=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	
	
	
	$("#r_arrow4").click(function() {
		$("#category4").animate({
			left: "-=100%"
		}, 500, function() {
			//Anim complete
		});
	});
	$("#l_arrow4").click(function() {
		$("#category4").animate({
			left: "+=100%"
		}, 500, function() {
			//Anim complete
		});
	});
});
