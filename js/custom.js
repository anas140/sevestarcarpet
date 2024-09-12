jQuery(function($) {'use strict';

	// Header
	$(window).resize(function(){
		$("header").width($(window).width());
	});


	$(document).on('click', '#nav_list', function() {
		$('#toggle-icon').toggleClass("open");
		$('.pushmenu-push').toggleClass('pushmenu-push-toright');
		$('.pushmenu-left').toggleClass('pushmenu-open');
	});

	// var swiper = new Swiper(".mySwiper", {
	// 	effect: "coverflow",
	// 	grabCursor: true,
	// 	centeredSlides: false,
	// 	slidesPerView: 5,
	// 	spaceBetween: 30,
	// 	coverflowEffect: {
	// 		rotate: 0,
	// 		stretch: 0,
	// 		depth: 200,
	// 		modifier: 1,
	// 		slideShadows: false,
	// 	},
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 	},
	// });

	var swiper = new Swiper(".mySwiper", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: false,
		slidesPerView: 7,
		spaceBetween: 30,
		loop: true,
		coverflowEffect: {
		  rotate: 0,
		  stretch: 0,
		  depth: 200,
		  modifier: 1,
		  slideShadows: false,
		},
		pagination: {
		  el: ".custom-pagination",
		  clickable: true,
		},
		navigation: {
		  nextEl: ".custom-next",
		  prevEl: ".custom-prev",
		},
		// Responsive breakpoints
		breakpoints: {
		  // when window width is >= 320px
		  320: {
			slidesPerView: 2,
			spaceBetween: 10,
		  },
		  380: {
			slidesPerView: 3,
			spaceBetween: 10,
		  },
		  // when window width is >= 480px
		  480: {
			slidesPerView: 3,
			spaceBetween: 20,
		  },
		  // when window width is >= 768px
		  768: {
			slidesPerView: 3,
			spaceBetween: 30,
		  },
		  // when window width is >= 1024px
		  1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		  },
		  // when window width is >= 1200px
		  1200: {
			slidesPerView: 5,
			spaceBetween: 30,
		  }
		}
	});
	  
	  

	//back to top
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
});