class click {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback.bind(this);

		this.Listener();
	}

	Listener() {
		this.element.addEventListener('click',this.callback);
	}

	end() {
		this.element.removeEventListener('click',this.callback);
	}
}


class mobileMenu {
	constructor() {
		this.baseSlide = document.querySelector('.siteHeaderMobile__menu-baseSlide');
		this.baseSlideLi = document.querySelectorAll('.siteHeaderMobile__menu-baseSlide > li');

		for (var i = this.baseSlideLi.length - 1; i >= 0; i--) {

			this.baseSlideLi[i].addEventListener('click',(event)=>{
				this.menuLogic(event);
			});

		}

		new click({
			element: document.querySelector('.siteHeaderMobile__button'),
			callback: (e) => {

				// так как checked сработает после js то делаем действия наоборот
				if (document.getElementById('showMenuMobile__FasXdFe').checked) {

					if (window.navigator.userAgent.indexOf('iPhone') + 1) {
						let mainPage = document.querySelector('.main__page');
						mainPage.style.width = '';
						mainPage.style.height = '';
						mainPage.style.overflow = '';
						mainPage.style.position = '';
					} else {
						document.body.style.overflow = '';
					}

					this.stopScroll = null;

				} else {
					//баг прыжка скролла можно убрать используя transitionend + overflow : hidden;



					if (window.navigator.userAgent.indexOf('iPhone') + 1) {
						let mainPage = document.querySelector('.main__page');
						mainPage.style.width = '100%';
						mainPage.style.height = '100%';
						mainPage.style.overflow = 'hidden';
						mainPage.style.position = 'fixed';
					} else {
						document.body.style.overflow = 'hidden';
					}

					this.stopScroll = true;
					this.mobileHeader.style.top = '0px';

				}
			}

		});



		// this.mobileAutorization();
		//
		//
		// window.addEventListener('resize',this.mobileAutorization);


		this.searchButton();
		this.headerFixed();
	}

	searchButton() {
		this.inputSearch = document.querySelector('.siteHeaderMobile__searchInput');
		this.inputSearch.addEventListener('blur', (e)=>{
			if (e.target.classList.contains('hasValue')) return;
			document.querySelector('.siteHeaderMobile__searchButton').style.display = 'none';
			document.querySelector('.siteHeaderMobile__search').style.transition = 'all .4s ease';
			document.querySelector('.siteHeaderMobile__search').style.width = '';


		});
		this.inputSearch.addEventListener('focus', (e)=>{
			if (e.target.classList.contains('hasValue')) return;
			setTimeout( ()=> {
				document.querySelector('.siteHeaderMobile__searchButton').style.display = 'block';
				setTimeout( ()=> {
					document.querySelector('.siteHeaderMobile__searchButton').style.opacity = 1;
				},4);
			},400);
			document.querySelector('.siteHeaderMobile__searchButton').style.opacity = 0;
			document.querySelector('.siteHeaderMobile__searchButton').style.transition = 'all .4s ease';
			document.querySelector('.siteHeaderMobile__search').style.width = 'calc(100% - 83px)';
			document.querySelector('.siteHeaderMobile__search').style.transition = 'all .4s ease';

		});
	}

	headerFixed() {
		this.mobileHeader = document.querySelector('.siteHeaderMobile__visual');
		this.headerContainer = document.querySelector('.siteHeaderMobile');
		this.hasClassFixedMenu = false;
		this.maxPageYOffset = 0;
		this.minPageYOffset = 0;

		window.addEventListener('scroll',()=>{

			if (this.stopScroll) return;

			let scroll = window.pageYOffset;

			if (scroll >= 600) {
				//прилипалка

				this.mobileHeader.style.position = '';
				if (!this.hasClassFixedMenu) {
					this.headerContainer.style.height = this.mobileHeader.offsetHeight + 'px';
					this.mobileHeader.classList.add('siteHeaderMobile__visual--fixed');

					this.mobileHeader.style.transition = 'all 0s';
					this.mobileHeader.style.top = '-' + (this.mobileHeader.offsetHeight + 'px');
					setTimeout(() => {
						this.mobileHeader.style.transition = '';
					}, 4);

					this.hasClassFixedMenu = true;
				} else if (scroll > this.minPageYOffset ) {
					this.maxPageYOffset = scroll;
					this.minPageYOffset = scroll;


					this.mobileHeader.style.transition = 'all 0s';
					this.mobileHeader.style.top = '-' + (this.mobileHeader.offsetHeight + 'px');
					setTimeout(() => {
						this.mobileHeader.style.transition = '';
					}, 10);
					//this.mobileHeader.classList.remove('siteHeaderMobile__visual--show');
				} else {
					this.minPageYOffset = scroll;
					if ( scroll > 500 && (this.maxPageYOffset - this.minPageYOffset) > 50 ) {
						this.mobileHeader.style.top = '0px';
						//this.mobileHeader.classList.add('siteHeaderMobile__visual--show');

					}
				}

			}
			//прилипалка
			if (scroll < 600) {
				if (parseInt(this.mobileHeader.style.top) < 0) {
					this.mobileHeader.style.top = '0px';
						this.mobileHeader.classList.remove('siteHeaderMobile__visual--fixed');
					this.headerContainer.style.height = '';
					this.mobileHeader.style.top = '';
					this.hasClassFixedMenu = false;
				}
				if (parseInt(this.mobileHeader.style.top) >= 0) {
				}
				if (scroll <= 0) {
					if (this.hasClassFixedMenu) {
						this.mobileHeader.classList.remove('siteHeaderMobile__visual--fixed');
						this.mobileHeader.style.position = 'relative';

						this.headerContainer.style.height = '';
						this.maxPageYOffset = 0;

						this.hasClassFixedMenu = false;
					}
				}
				if (scroll > this.maxPageYOffset && scroll > this.mobileHeader.offsetHeight * 2) {
					this.maxPageYOffset = scroll;
					this.mobileHeader.style.transition = 'all 0s';
					this.mobileHeader.style.top = '0px';
					setTimeout(() => {
						this.mobileHeader.style.transition = '';
					}, 10);

				}
				return;
			}



		});




		// window.addEventListener('scroll',()=>{
		//
		// 	let scroll = window.pageYOffset;
		//
		// 	if (scroll >= 600) {
		// 		//прилипалка
		//
		// 		this.mobileHeader.style.position = '';
		// 		if (!this.hasClassFixedMenu) {
		// 			this.mobileHeader.classList.add('siteHeaderMobile__visual--fixed');
		// 			this.headerContainer.style.height = this.mobileHeader.offsetHeight + 'px';
		// 			this.mobileHeader.style.top = '-' + (this.mobileHeader.offsetHeight + 'px');
		// 			this.hasClassFixedMenu = true;
		// 		}
		//
		// 		// вытаскивалка
		// 		if (scroll > this.minPageYOffset ) {
		// 			this.maxPageYOffset = scroll;
		// 			this.minPageYOffset = scroll;
		//
		//
		// 			this.mobileHeader.style.top = '-' + (this.mobileHeader.offsetHeight + 'px');
		// 			//this.mobileHeader.classList.remove('siteHeaderMobile__visual--show');
		// 		} else {
		// 			this.minPageYOffset = scroll;
		// 		}
		//
		// 		if ((this.maxPageYOffset - this.minPageYOffset) > 200 && scroll > 500) {
		// 			this.mobileHeader.style.top = '0px');
		// 			//this.mobileHeader.classList.add('siteHeaderMobile__visual--show');
		//
		// 		}
		// 	}
		// 	//прилипалка
		// 	if (scroll < 600) {
		// 		if (!this.mobileHeader.classList.contains('siteHeaderMobile__visual--show')) {
		// 			this.mobileHeader.classList.remove('siteHeaderMobile__visual--show');
		// 				this.mobileHeader.classList.remove('siteHeaderMobile__visual--fixed');
		// 			this.headerContainer.style.height = '';
		// 			this.mobileHeader.style.top = '';
		// 			this.hasClassFixedMenu = false;
		// 		}
		// 		if (this.mobileHeader.classList.contains('siteHeaderMobile__visual--show')) {
		// 		}
		// 		if (scroll <= 0) {
		// 			if (this.hasClassFixedMenu) {
		// 				this.mobileHeader.classList.remove('siteHeaderMobile__visual--fixed');
		// 				this.mobileHeader.style.position = 'relative';
		//
		// 				this.headerContainer.style.height = '';
		// 				this.maxPageYOffset = 0;
		//
		// 				this.hasClassFixedMenu = false;
		// 			}
		// 		}
		// 		if (scroll > this.maxPageYOffset && scroll > this.mobileHeader.offsetHeight * 2) {
		// 			this.maxPageYOffset = scroll;
		// 			this.mobileHeader.style.transition = 'all 0s';
		// 			this.mobileHeader.classList.remove('siteHeaderMobile__visual--show');
		// 			setTimeout(() => {
		// 				this.mobileHeader.style.transition = '';
		// 			}, 10);
		//
		// 		}
		// 		return;
		// 	}
		//
		//
		//
		// });
	}

	mobileAutorization() {

		let accountIcons = [document.querySelector('.siteHeaderMobile__visualNav-account'),
							 document.querySelector('.siteHeaderMobile__account')];


		let bg = document.querySelector('.container__autorization')

		function addListeners() {
				document.querySelector('.container__autorization').classList.toggle('container__autorization--show');
		}
		for (var i = accountIcons.length - 1; i >= 0; i--) {
			accountIcons[i].addEventListener('click', addListeners);
		}

		function addListenerBg(event) {
			if (event.target == event.currentTarget) {
				document.querySelector('.container__autorization').classList.toggle('container__autorization--show');
			}
		}
		bg.addEventListener('click', addListenerBg);

	}

	menuLogic(event) {
		let el = event.target.closest('ul').classList.contains('siteHeaderMobile__menu-baseSlide');

		if (el) {
			el = event.target.closest('li');
			this.liClose = document.createElement('li');
			this.liClose.classList.add('siteHeaderMobile__menuClose');
			this.liClose.innerHTML = `
				<div>
					<span>
						<svg class="siteHeaderMobile__arrow" viewBox="0 0 48 48">
							<use xlink:href="#icon-arrow">
						</use></svg>
						<span>Вернуться</span>
					</span>
				</div>`;
			this.liColumnInfo = document.createElement('li');


			this.spisokName = event.target.closest('li').querySelector('div').cloneNode(true);
			this.spisokName.querySelector('.siteHeaderMobile__arrow').remove();
			this.liColumnInfo.prepend(this.spisokName);

			this.child = el.querySelector('ul');
			this.child.prepend(this.liColumnInfo);
			this.child.prepend(this.liClose);



			this.child.style.display = 'block';
			this.baseSlide.style.overflow = 'hidden';
			this.baseSlide.scrollTop = '0';

		} else if(event.target.closest('.siteHeaderMobile__menuClose')) {

			this.child.style.display = 'none';
			this.baseSlide.style.overflow = 'auto';

			this.liClose.remove();
			this.liColumnInfo.remove();
			console.log(this.liClose,this.liColumnInfo);

			this.spisokName = '';
		}
	}
}


class desktopHeader {
	constructor() {
		var inputs = document.querySelectorAll('.container__siteHeader input[type="text"]');

		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('load',function(){
				if (this.value.length > 0){
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
			inputs[i].addEventListener('change',function(){
				if (this.value.length > 0){
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
			inputs[i].addEventListener('keyup',function(){
				if (this.value.length > 0){
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
		}
	}
}

document.addEventListener('DOMContentLoaded',function(){
	try {
		new desktopHeader();
	} catch (e) {
		console.log('Ошибка в скрипте шапки десктопа, возможно нет инпутов личного кабинета или не удается их найти.',e);
	}
});

// class templateCatalogNav {
// 	constructor() {
//
//
//
//
// 		this.men = new pageDraw({
// 			data: '/men.html',
// 			element:'ul'
// 		});
// 		this.men.data.then((data)=>{
// 			this.men.content = data;
// 			this.men.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-men')];
// 			this.men.draw;
// 		});
//
//
// 		this.woman = new pageDraw({
// 			data: '/woman.html',
// 			element:'ul'
// 		});
// 		this.woman.data.then((data)=>{
// 			this.woman.content = data;
// 			this.woman.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-woman')];
// 			this.woman.draw;
// 		});
//
// 		this.boy = new pageDraw({
// 			data: '/men.html',
// 			element:'ul'
// 		});
// 		this.boy.data.then((data)=>{
// 			this.boy.content = data;
// 			this.boy.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-boy')];
// 			this.boy.draw;
// 		});
//
//
// 		this.girl = new pageDraw({
// 			data: '/woman.html',
// 			element:'ul'
// 		});
// 		this.girl.data.then((data)=>{
// 			this.girl.content = data;
// 			this.girl.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-girl')];
// 			this.girl.draw;
// 		});
//
// 		this.collection = new pageDraw({
// 			data: '/collection.html',
// 			element:'ul'
// 		});
// 		this.collection.data.then((data)=>{
// 			this.collection.content = data;
// 			this.collection.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-collections')];
// 			this.collection.draw;
// 		});
//
// 		this.icons = new pageDraw({
// 			data: '/icons.html',
// 			position:['afterend',document.querySelector('header')]
// 		});
// 		this.icons.data.then((data)=>{
// 			this.icons.content = data;
// 			this.icons.draw;
// 		});


document.addEventListener('DOMContentLoaded',function(){
	try {
		new mobileMenu();
	} catch (e) {
		console.log('Ошибка в скрипте шапки десктопа, возможно нет инпутов личного кабинета или не удается их найти.',e);
	}
});
// 	}
//
//
// }
//
// new templateCatalogNav();
//
//
