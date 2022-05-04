import Swiper, { Parallax, Mousewheel } from "swiper";

document.addEventListener("DOMContentLoaded", () => {
	const swiperImg = new Swiper(".swiper-img", {
		modules: [Parallax, Mousewheel],
		speed: 2400,
		loop: false,
		parallax: true,
		mousewheel: {
			invert: false,
		},
	});
});
