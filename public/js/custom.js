/* Theme Name: Radix *
* Developed By: Pratiksha Sharma*
* Version: 1.1, 28 June, 2019*
*/
//loader
document.addEventListener("DOMContentLoaded", function(){	
	$('.intro_logo').delay(100).fadeOut('slow');
	$('.intro').delay(300).addClass('active');
	setTimeout(function(){
		$('.intro').delay(2000).addClass('remove');
	}, 2000);
	if ($(window).width() > 768) {
		// AOS animation
		AOS.init({	duration: 1200,})	
	}
});
//Header
$(window).scroll(function(){
  var sticky = $('.navbar.fixed-top'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
