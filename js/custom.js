(function ($) {

  "use strict";

  const darkMode = localStorage.getItem('darkMode') || 'enabled';

    if (darkMode  === 'enabled') {
      $('body').addClass('dark-mode');
      $('.color-mode-icon').addClass('active');
    }
  
    $('.color-mode').click(function() {
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');

      
      if ($('body').hasClass('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
