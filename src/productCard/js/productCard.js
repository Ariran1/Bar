'use strict';
var Click = require('../../js/click.js');

class productCard {
	constructor(options) {
		this.photos = document.querySelectorAll('.productCard__miniPhotos-listItem');
		this.bigPhoto = document.querySelector('.productCard-bigImage');

		for (var i = 0; i < this.photos.length; i++) {
			this.photos[i].addEventListener('click',() => {

				for (var m = 0; m < this.photos.length; m++) {
					this.photos[m].classList.remove('productCard__miniPhotos-listItem--active');
				}

				this.bigPhoto.src = event.currentTarget.querySelector('img').getAttribute('data-big-photo-src');
				let hrefForDownload = event.currentTarget.querySelector('img').getAttribute('data-big-photo-download-href') || alert('Оригинала нет');
				let a = document.querySelector('.productCard-download').setAttribute('href',hrefForDownload);
				event.currentTarget.classList.add('productCard__miniPhotos-listItem--active');
			});
		}



		this.lists = document.querySelectorAll('[data-droplist-container]');

		for (var i = 0; i < this.lists.length; i++) {
			console.log(this.lists[i].parentElement);
			this.lists[i].addEventListener('click',(event)=>{

				this.toggleDropList(event);

			});
		}
		this.dropLists = document.querySelectorAll('[data-style="dropList"]');
		new Click({
			parent:this,
			callback: function(event){
				this.dropLists = document.querySelectorAll('[data-style="dropList"]');
				if (event.target.closest('[data-droplist-container]')) return;
				for (var i = 0; i < this.dropLists.length; i++) {
					this.dropLists[i].style.display = 'none';
				}
			}
		});

		this.setOrangeColorForAction();
	}

	toggleDropList(event) {
		let element = event.currentTarget.querySelector('[data-style="dropList"]');
		if (element.style.display == 'none' || getComputedStyle(element).display == "none") {

			element.style.display = 'block';
			let clickOpen = new Click({
				element:element.querySelector('ul'),
				callback:function(event) {

					let content = event.target.closest('li');

					if (!content) {
						this.end();
						return;
					}

					let result = event.currentTarget.closest('span').querySelector('[data-droplist-result]');
					result.innerHTML = content.innerHTML;
					let attributs = content.dataset;

					for (var item in attributs) {
						result.dataset[item] = content.dataset[item];
					}
					this.end();
				}
			});

		} else {
			element.style.display = 'none';
		}
	}

	setOrangeColorForAction() {

    window.addEventListener('scroll',setOrange);

    function setOrange(){
			let elements = document.querySelectorAll('.productCard__mobileCarouselAndBuyBlock,.productCard__buyBlock');
			for (var i = 0; i < elements.length; i++) {
				if (!elements) continue;
				elements[i].classList.add('orange');
			}
        this.removeEventListener('scroll',setOrange);
    }

	}
}

document.addEventListener('DOMContentLoaded',()=>{
  try {
		new productCard();
	} catch(e) {
		console.error('Не отрабатывает скрипт карточки товара.');
	}
});
