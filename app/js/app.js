import Swiper, { Parallax, Mousewheel, Controller } from "swiper";
Swiper.use([Parallax, Mousewheel, Controller]);

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
	});

	swiperTxt.controller.control = swiperImg;
	swiperImg.controller.control = swiperTxt;
});
