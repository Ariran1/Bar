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
	}
}

document.addEventListener('DOMContentLoaded',()=>{
  try {
		new productCard();
	} catch(e) {
		console.error('Не отрабатывает скрипт карточки товара.');
	}
});
