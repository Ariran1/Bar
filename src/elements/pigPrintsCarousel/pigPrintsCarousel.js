'use strict';

var owlCarousel = require('../../js/owl.carousel.min.js');
owlCarousel.constructor();

class pigPrintsCarousel {
	constructor() {

		this.arrow = '<svg viewBox="0 0 48 48"><use xlink:href="#icon-arrow"></use></svg>';
		this.initBigPrintCarousel();
	}

	initBigPrintCarousel() {
		let arrow = this.arrow;
		$('.bigPrintsCarousel-carousel').each(function(item){

			$(this).owlCarousel({
								      navText:[arrow,arrow],
											responsive: {
												0:{
													items: 2
												},
												500: {
													items: 3
												},
												650: {
													items:4
												},
												850: {
													items:5
												},
												1100: {
													items:6
												}
											}
										});
		});
	}

}

document.addEventListener('DOMContentLoaded',()=>{
	try {
		new pigPrintsCarousel();
	} catch (err) {
		console.log(err);
	}
});
