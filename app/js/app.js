import Swiper, { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from "swiper";
Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation]);

import { gsap, Power2 } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
	const swiperImg = new Swiper(".swiper-img", {
		speed: 2400,
		loop: false,
		parallax: true,
		pagination: {
			el: ".count__total",
			type: "custom",
			renderCustom: function (swiper, current, total) {
				return `0${total}`;
			},
		},
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

	let countCurrent = document.querySelector(".count__current"),
		slideNumber = document.querySelector(".slide-number");
	swiperTxt.on("slideChange", function () {
		let ind = swiperTxt.activeIndex + 1;
		gsap.to(countCurrent, 0.2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function () {
				gsap.to(countCurrent, 0.1, {
					force3D: true,
					y: 10,
				});
				countCurrent.innerHTML = `0${ind}`;
				slideNumber.innerHTML = `0${ind}`;
			},
		});
		gsap.to(countCurrent, 0.2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: 0.3,
		});

		// countCurrent.innerHTML = `0${ind}`;
		// slideNumber.innerHTML = `0${ind}`;
	});
});
