"use strict"
!function(){
	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var click = function () {
		function click(options) {
			_classCallCheck(this, click);

			this.element = options.element || window;
			this.callback = options.callback.bind(this);

			this.Listener();
		}

		_createClass(click, [{
			key: 'Listener',
			value: function Listener() {
				this.element.addEventListener('click', this.callback);
			}
		}, {
			key: 'end',
			value: function end() {
				this.element.removeEventListener('click', this.callback);
			}
		}]);

		return click;
	}();

	var mobileMenu = function () {
		function mobileMenu() {
			var _this = this;

			_classCallCheck(this, mobileMenu);

			this.baseSlide = document.querySelector('.siteHeaderMobile__menu-baseSlide');
			this.baseSlideLi = document.querySelectorAll('.siteHeaderMobile__menu-baseSlide > li');

			for (var i = this.baseSlideLi.length - 1; i >= 0; i--) {

				this.baseSlideLi[i].addEventListener('click', function (event) {
					_this.menuLogic(event);
				});
			}

			new click({
				element: document.querySelector('.siteHeaderMobile__button'),
				callback: function callback(e) {

					// так как checked сработает после js то делаем действия наоборот
					if (document.getElementById('showMenuMobile__FasXdFe').checked) {

						if (window.navigator.userAgent.indexOf('iPhone') + 1) {
							var mainPage = document.querySelector('.main__page');
							mainPage.style.width = '';
							mainPage.style.height = '';
							mainPage.style.overflow = '';
							mainPage.style.position = '';
						} else {
							document.body.style.overflow = '';
						}

						_this.stopScroll = null;
					} else {
						//баг прыжка скролла можно убрать используя transitionend + overflow : hidden;


						if (window.navigator.userAgent.indexOf('iPhone') + 1) {
							var _mainPage = document.querySelector('.main__page');
							_mainPage.style.width = '100%';
							_mainPage.style.height = '100%';
							_mainPage.style.overflow = 'hidden';
							_mainPage.style.position = 'fixed';
						} else {
							document.body.style.overflow = 'hidden';
						}

						_this.stopScroll = true;
						_this.mobileHeader.style.top = '0px';
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

		_createClass(mobileMenu, [{
			key: 'searchButton',
			value: function searchButton() {
				this.inputSearch = document.querySelector('.siteHeaderMobile__searchInput');
				this.inputSearch.addEventListener('blur', function (e) {
					if (e.target.classList.contains('hasValue')) return;
					document.querySelector('.siteHeaderMobile__searchButton').style.display = 'none';
					document.querySelector('.siteHeaderMobile__search').style.transition = 'all .4s ease';
					document.querySelector('.siteHeaderMobile__search').style.width = '';
				});
				this.inputSearch.addEventListener('focus', function (e) {
					if (e.target.classList.contains('hasValue')) return;
					setTimeout(function () {
						document.querySelector('.siteHeaderMobile__searchButton').style.display = 'block';
						setTimeout(function () {
							document.querySelector('.siteHeaderMobile__searchButton').style.opacity = 1;
						}, 4);
					}, 400);
					document.querySelector('.siteHeaderMobile__searchButton').style.opacity = 0;
					document.querySelector('.siteHeaderMobile__searchButton').style.transition = 'all .4s ease';
					document.querySelector('.siteHeaderMobile__search').style.width = 'calc(100% - 83px)';
					document.querySelector('.siteHeaderMobile__search').style.transition = 'all .4s ease';
				});
			}
		}, {
			key: 'headerFixed',
			value: function headerFixed() {
				var _this2 = this;

				this.mobileHeader = document.querySelector('.siteHeaderMobile__visual');
				this.headerContainer = document.querySelector('.siteHeaderMobile');
				this.hasClassFixedMenu = false;
				this.maxPageYOffset = 0;
				this.minPageYOffset = 0;

				window.addEventListener('scroll', function () {

					if (_this2.stopScroll) return;

					var scroll = window.pageYOffset;

					if (scroll >= 600) {
						//прилипалка

						_this2.mobileHeader.style.position = '';
						if (!_this2.hasClassFixedMenu) {
							_this2.headerContainer.style.height = _this2.mobileHeader.offsetHeight + 'px';
							_this2.mobileHeader.classList.add('siteHeaderMobile__visual--fixed');

							_this2.mobileHeader.style.transition = 'all 0s';
							_this2.mobileHeader.style.top = '-' + (_this2.mobileHeader.offsetHeight + 'px');
							setTimeout(function () {
								_this2.mobileHeader.style.transition = '';
							}, 4);

							_this2.hasClassFixedMenu = true;
						} else if (scroll > _this2.minPageYOffset) {
							_this2.maxPageYOffset = scroll;
							_this2.minPageYOffset = scroll;

							_this2.mobileHeader.style.transition = 'all 0s';
							_this2.mobileHeader.style.top = '-' + (_this2.mobileHeader.offsetHeight + 'px');
							setTimeout(function () {
								_this2.mobileHeader.style.transition = '';
							}, 10);
							//this.mobileHeader.classList.remove('siteHeaderMobile__visual--show');
						} else {
							_this2.minPageYOffset = scroll;
							if (scroll > 500 && _this2.maxPageYOffset - _this2.minPageYOffset > 50) {
								_this2.mobileHeader.style.top = '0px';
								//this.mobileHeader.classList.add('siteHeaderMobile__visual--show');
							}
						}
					}
					//прилипалка
					if (scroll < 600) {
						if (parseInt(_this2.mobileHeader.style.top) < 0) {
							_this2.mobileHeader.style.top = '0px';
							_this2.mobileHeader.classList.remove('siteHeaderMobile__visual--fixed');
							_this2.headerContainer.style.height = '';
							_this2.mobileHeader.style.top = '';
							_this2.hasClassFixedMenu = false;
						}
						if (parseInt(_this2.mobileHeader.style.top) >= 0) {}
						if (scroll <= 0) {
							if (_this2.hasClassFixedMenu) {
								_this2.mobileHeader.classList.remove('siteHeaderMobile__visual--fixed');
								_this2.mobileHeader.style.position = 'relative';

								_this2.headerContainer.style.height = '';
								_this2.maxPageYOffset = 0;

								_this2.hasClassFixedMenu = false;
							}
						}
						if (scroll > _this2.maxPageYOffset && scroll > _this2.mobileHeader.offsetHeight * 2) {
							_this2.maxPageYOffset = scroll;
							_this2.mobileHeader.style.transition = 'all 0s';
							_this2.mobileHeader.style.top = '0px';
							setTimeout(function () {
								_this2.mobileHeader.style.transition = '';
							}, 10);
						}
						return;
					}
				});
			}
		}, {
			key: 'mobileAutorization',
			value: function mobileAutorization() {

				var accountIcons = [document.querySelector('.siteHeaderMobile__visualNav-account'), document.querySelector('.siteHeaderMobile__account')];

				var bg = document.querySelector('.container__autorization');

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
		}, {
			key: 'menuLogic',
			value: function menuLogic(event) {
				var el = event.target.closest('ul').classList.contains('siteHeaderMobile__menu-baseSlide');

				if (el) {
					el = event.target.closest('li');
					this.liClose = document.createElement('li');
					this.liClose.classList.add('siteHeaderMobile__menuClose');
					this.liClose.innerHTML = '\n\t\t\t\t<div>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<svg class="siteHeaderMobile__arrow" viewBox="0 0 48 48">\n\t\t\t\t\t\t\t<use xlink:href="#icon-arrow">\n\t\t\t\t\t\t</use></svg>\n\t\t\t\t\t\t<span>\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>';
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
				} else if (event.target.closest('.siteHeaderMobile__menuClose')) {

					this.child.style.display = 'none';
					this.baseSlide.style.overflow = 'auto';

					this.liClose.remove();
					this.liColumnInfo.remove();
					console.log(this.liClose, this.liColumnInfo);

					this.spisokName = '';
				}
			}
		}]);

		return mobileMenu;
	}();

	var desktopHeader = function desktopHeader() {
		_classCallCheck(this, desktopHeader);

		var inputs = document.querySelectorAll('.container__siteHeader input[type="text"]');

		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('load', function () {
				if (this.value.length > 0) {
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
			inputs[i].addEventListener('change', function () {
				if (this.value.length > 0) {
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
			inputs[i].addEventListener('keyup', function () {
				if (this.value.length > 0) {
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
		}
	};

	document.addEventListener('DOMContentLoaded', function () {
		try {
			new desktopHeader();
		} catch (e) {
			console.log('Ошибка в скрипте шапки десктопа, возможно нет инпутов личного кабинета или не удается их найти.', e);
		}
	});

	document.addEventListener('DOMContentLoaded', function () {
		try {
			new mobileMenu();
		} catch (e) {
			console.log('Ошибка в скрипте шапки десктопа, возможно нет инпутов личного кабинета или не удается их найти.', e);
		}
	});

}();
