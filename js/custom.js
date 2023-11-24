(function ($) {
	"use strict";


	/* ..............................................
	Loader 
	................................................. */

	$(window).on('load', function () {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({ 'overflow': 'visible' });
	});

	function createHeart() {
		const heart = document.createElement('div');
		heart.classList.add('heart');

		heart.style.left = Math.random() * 100 + "vw";
		heart.style.animationDuration = Math.random() * 2 + 3 + "s";

		heart.innerText = '💗';

		document.body.appendChild(heart);

		setTimeout(() => {
			heart.remove();
		}, 10000);
	}

	setInterval(createHeart, 300);

	/* ..............................................
	Navbar Bar
	................................................. */

	$('.navbar-nav .nav-link').on('click', function () {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	/* ..............................................
	Fixed Menu
	................................................. */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	Gallery
	................................................. */

	$(document).ready(function () {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by Đỗ Xuân Nam</small>';
				}
			}
		});
	});

	/* ..............................................
	Smooth Scroll
	................................................. */

	$('a[href*="#"]:not([href="#"])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 65,
				}, 500);
				return false;
			}
		}
	});

	// Specify the target date
	const targetDate = new Date("2023-12-03"); // Replace "2023-12-31" with your desired date

	// Countdown
	let timer = setInterval(function () {
		// Get today's date
		const today = new Date().getTime();

		// Get the difference
		const diff = targetDate - today;

		// Math
		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((diff % (1000 * 60)) / 1000);

		// Display
		document.getElementById("timer").innerHTML =
			`<div class="days">
      <div class="numbers">${days}</div>Ngày
    </div>
    <div class="hours">
      <div class="numbers">${hours}</div>Giờ
    </div>
    <div class="minutes">
      <div class="numbers">${minutes}</div>Phút
    </div>
    <div class="seconds">
      <div class="numbers">${seconds}</div>Giây
    </div>`;

	}, 1000);



}(jQuery));