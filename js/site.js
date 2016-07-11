$(document).ready(function () {
    var hamburger = $(".hamburger");
    var navigation = $("nav");
    
    hamburger.click(function () {
		$(this).toggleClass("open");
        navigation.slideToggle();
    });
	
	$(window).resize(function () {
		if ($(window).width() > 720) {
			navigation.show();
		}
	});
});