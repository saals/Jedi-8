import Swiper, { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from "swiper";
Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation]);

import { gsap, Power2 } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
	const swiperImg = new Swiper(".swiper-img", {
		speed: 2400,
		loop: false,
		parallax: true,
	});
	const swiperTxt = new Swiper(".swiper-txt", {
		speed: 2400,
		loop: false,
		mousewheel: {
			invert: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
	});

	swiperTxt.controller.control = swiperImg;
	swiperImg.controller.control = swiperTxt;

	// let gear = document.querySelector(".hero-content__gear");

	swiperTxt.on("slideNextTransitionStart", function () {
		gsap.to(".hero-content__gear", {
			duration: 2.4,
			rotate: "+=30",
			ease: Power2.easeOut,
		});
	});
	swiperTxt.on("slidePrevTransitionStart", function () {
		gsap.to(".hero-content__gear", {
			duration: 2.4,
			rotate: "-=30",
			ease: Power2.easeOut,
		});
	});
});
