(function ($) {

	/*
    Table of Context
    -------------------------------

    1. Preloader
    2. Sticky
    3. Navigation 
    4. Login Popup
    5. Banner Slider
    6. Player Slider
    7. Product Slider
    8. Partner Slider
    9. Add Plus Minus Quantity 
    10. Counter Js

    */

	//=============================
    //Preloader Start
    //=============================

    $(window).on('load', function () {
        $('.bar').fadeOut();
        $('.preloader-bar').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    });

	//=================================
	// Scroll Top Bar
	//=================================
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});

	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}


	//=================================
	// Sticky Navbar
	//=================================
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $('.sticky-top');

        if (scrolling >= 100) {

            $(stikey).addClass("nav-bg");

        } else {

            $(stikey).removeClass("nav-bg");
        }
    });
	
    //=============================
    // Navigation Start
    //=============================
    $('#menuTaggler').click(function () {
        $('#overlay').toggleClass('open');
    });
    $('.close-btn').click(function () {
        $('#overlay').toggleClass('open');
    });

	$('.main-nav li a').on('click', function () {
        $('#overlay').toggleClass('open');
    });
   
	//=================================
	// Login Popup Modal
	//=================================
	$("#login-btn").on( "click", function() {
		$('#login').modal('hide');  
		$('#signup').modal('show');  
	});

	//=================================
	// Banner Slider
	//=================================
	var swiper = new Swiper(".banner-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
		effect: "fade",
		loop: true,
        loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
		  navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
      });

	//=================================
	// Player Slider
	//=================================
	var swiper = new Swiper(".game-slide", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 1,
				// spaceBetween: 10,
			},

			767: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
			1439: {
				slidesPerView: 4,
			},
		},
	});

	//=================================
	// Product Slider
	//=================================
	var swiper = new Swiper(".product-slide", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 1,
				// spaceBetween: 10,
			},

			767: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
			1439: {
				slidesPerView: 4,
			},
		},
	});

	//=================================
	// Partner Slider
	//=================================
	var swiper = new Swiper(".partner-slider", {
		slidesPerView: 6,
		spaceBetween: 30,
		// centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			479: {
				slidesPerView: 2,
				// spaceBetween: 10,
			},
			575: {
				slidesPerView: 3,
				// spaceBetween: 10,
			},

			767: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 4,
			},
			1439: {
				slidesPerView: 6,
			},
		},
	});

	//=================================
	// Add/Minus Quantity
	//=================================
	$(".incressQnt").on("click", function () {
		var $qty = $(this).closest("div").find(".qnttinput");
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal)) {
			$qty.val(currentVal + 1);
		}
	});
	$(".decressQnt").on("click", function () {
		var $qty = $(this).closest("div").find(".qnttinput");
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal) && currentVal > 0) {
			$qty.val(currentVal - 1);
		}
	});

	//=================================
	// counter part js
	//=================================
	 $('.counter').counterUp();


})(jQuery);
