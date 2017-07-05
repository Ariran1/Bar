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

		this.button = document.querySelector('.siteHeaderMobile__button');

		new click({
			element: this.button,
			callback: function callback(e) {
				// так как checked сработает после js то делаем действия наоборот
				if (document.getElementById('showMenuMobile__FasXdFe').checked) {

					document.documentElement.style.overflow = 'auto';
				} else {
					//баг прыжка скролла можно убрать используя transitionend + overflow : hidden;


					document.documentElement.style.overflow = 'hidden';
				}
			}
		});

		this.inputSearch = document.querySelector('.siteHeaderMobile__searchInput');

		this.mobileAutorization();
		window.addEventListener('resize', this.mobileAutorization);

		document.querySelector('.siteHeaderMobile__searchInput').addEventListener('blur', function (e) {
			document.querySelector('.siteHeaderMobile__searchButton').style.display = 'none';
			document.querySelector('.siteHeaderMobile__search').style.width = '100%';
			document.querySelector('.siteHeaderMobile__search').style.transition = 'all .4s ease';
		});
		document.querySelector('.siteHeaderMobile__searchInput').addEventListener('focus', function (e) {
			setTimeout(function () {
				document.querySelector('.siteHeaderMobile__searchButton').style.display = 'block';
				setTimeout(function () {
					document.querySelector('.siteHeaderMobile__searchButton').style.opacity = 1;
				}, 4);
			}, 400);
			document.querySelector('.siteHeaderMobile__searchButton').style.opacity = 0;
			document.querySelector('.siteHeaderMobile__searchButton').style.transition = 'all .4s ease';
			document.querySelector('.siteHeaderMobile__search').style.width = '';
			document.querySelector('.siteHeaderMobile__search').style.transition = 'all .4s ease';
		});
	}

	_createClass(mobileMenu, [{
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


setTimeout(function () {
	return new mobileMenu();
}, 1240);
// 	}
//
//
// }
//
// new templateCatalogNav();
//
//
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBjbGljayhvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIGNsaWNrKTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCB8fCB3aW5kb3c7XG5cdFx0dGhpcy5jYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKTtcblxuXHRcdHRoaXMuTGlzdGVuZXIoKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhjbGljaywgW3tcblx0XHRrZXk6ICdMaXN0ZW5lcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIExpc3RlbmVyKCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYWxsYmFjayk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZW5kJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZW5kKCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYWxsYmFjayk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIGNsaWNrO1xufSgpO1xuXG52YXIgbW9iaWxlTWVudSA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gbW9iaWxlTWVudSgpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIG1vYmlsZU1lbnUpO1xuXG5cdFx0dGhpcy5iYXNlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fbWVudS1iYXNlU2xpZGUnKTtcblx0XHR0aGlzLmJhc2VTbGlkZUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGVIZWFkZXJNb2JpbGVfX21lbnUtYmFzZVNsaWRlID4gbGknKTtcblxuXHRcdGZvciAodmFyIGkgPSB0aGlzLmJhc2VTbGlkZUxpLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cblx0XHRcdHRoaXMuYmFzZVNsaWRlTGlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0X3RoaXMubWVudUxvZ2ljKGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX2J1dHRvbicpO1xuXG5cdFx0bmV3IGNsaWNrKHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuYnV0dG9uLFxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKGUpIHtcblx0XHRcdFx0Ly8g0YLQsNC6INC60LDQuiBjaGVja2VkINGB0YDQsNCx0L7RgtCw0LXRgiDQv9C+0YHQu9C1IGpzINGC0L4g0LTQtdC70LDQtdC8INC00LXQudGB0YLQstC40Y8g0L3QsNC+0LHQvtGA0L7RglxuXHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dNZW51TW9iaWxlX19GYXNYZEZlJykuY2hlY2tlZCkge1xuXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8v0LHQsNCzINC/0YDRi9C20LrQsCDRgdC60YDQvtC70LvQsCDQvNC+0LbQvdC+INGD0LHRgNCw0YLRjCDQuNGB0L/QvtC70YzQt9GD0Y8gdHJhbnNpdGlvbmVuZCArIG92ZXJmbG93IDogaGlkZGVuO1xuXG5cblx0XHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5pbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyTW9iaWxlX19zZWFyY2hJbnB1dCcpO1xuXG5cdFx0dGhpcy5tb2JpbGVBdXRvcml6YXRpb24oKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tb2JpbGVBdXRvcml6YXRpb24pO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX3NlYXJjaElucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fc2VhcmNoQnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyTW9iaWxlX19zZWFyY2gnKS5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyTW9iaWxlX19zZWFyY2gnKS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAuNHMgZWFzZSc7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX3NlYXJjaElucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyTW9iaWxlX19zZWFyY2hCdXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX3NlYXJjaEJ1dHRvbicpLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0XHR9LCA0KTtcblx0XHRcdH0sIDQwMCk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fc2VhcmNoQnV0dG9uJykuc3R5bGUub3BhY2l0eSA9IDA7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fc2VhcmNoQnV0dG9uJykuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgLjRzIGVhc2UnO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX3NlYXJjaCcpLnN0eWxlLndpZHRoID0gJyc7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fc2VhcmNoJykuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgLjRzIGVhc2UnO1xuXHRcdH0pO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKG1vYmlsZU1lbnUsIFt7XG5cdFx0a2V5OiAnbW9iaWxlQXV0b3JpemF0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbW9iaWxlQXV0b3JpemF0aW9uKCkge1xuXG5cdFx0XHR2YXIgYWNjb3VudEljb25zID0gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyTW9iaWxlX192aXN1YWxOYXYtYWNjb3VudCcpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fYWNjb3VudCcpXTtcblxuXHRcdFx0dmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fYXV0b3JpemF0aW9uJyk7XG5cblx0XHRcdGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fYXV0b3JpemF0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFpbmVyX19hdXRvcml6YXRpb24tLXNob3cnKTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSBhY2NvdW50SWNvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0YWNjb3VudEljb25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTGlzdGVuZXJzKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gYWRkTGlzdGVuZXJCZyhldmVudCkge1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0ID09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19hdXRvcml6YXRpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWluZXJfX2F1dG9yaXphdGlvbi0tc2hvdycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRiZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZExpc3RlbmVyQmcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ21lbnVMb2dpYycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG1lbnVMb2dpYyhldmVudCkge1xuXHRcdFx0dmFyIGVsID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ3VsJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaXRlSGVhZGVyTW9iaWxlX19tZW51LWJhc2VTbGlkZScpO1xuXG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0ZWwgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGknKTtcblx0XHRcdFx0dGhpcy5saUNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0dGhpcy5saUNsb3NlLmNsYXNzTGlzdC5hZGQoJ3NpdGVIZWFkZXJNb2JpbGVfX21lbnVDbG9zZScpO1xuXHRcdFx0XHR0aGlzLmxpQ2xvc2UuaW5uZXJIVE1MID0gJ1xcblxcdFxcdFxcdFxcdDxkaXY+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHN2ZyBjbGFzcz1cInNpdGVIZWFkZXJNb2JpbGVfX2Fycm93XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWFycm93XCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC91c2U+PC9zdmc+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4+XFx1MDQxMlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0NDNcXHUwNDQyXFx1MDQ0Q1xcdTA0NDFcXHUwNDRGPC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj4nO1xuXHRcdFx0XHR0aGlzLmxpQ29sdW1uSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cblx0XHRcdFx0dGhpcy5zcGlzb2tOYW1lID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpJykucXVlcnlTZWxlY3RvcignZGl2JykuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0XHR0aGlzLnNwaXNva05hbWUucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX2Fycm93JykucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubGlDb2x1bW5JbmZvLnByZXBlbmQodGhpcy5zcGlzb2tOYW1lKTtcblxuXHRcdFx0XHR0aGlzLmNoaWxkID0gZWwucXVlcnlTZWxlY3RvcigndWwnKTtcblx0XHRcdFx0dGhpcy5jaGlsZC5wcmVwZW5kKHRoaXMubGlDb2x1bW5JbmZvKTtcblx0XHRcdFx0dGhpcy5jaGlsZC5wcmVwZW5kKHRoaXMubGlDbG9zZSk7XG5cblx0XHRcdFx0dGhpcy5jaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0dGhpcy5iYXNlU2xpZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRcdFx0dGhpcy5iYXNlU2xpZGUuc2Nyb2xsVG9wID0gJzAnO1xuXHRcdFx0fSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLnNpdGVIZWFkZXJNb2JpbGVfX21lbnVDbG9zZScpKSB7XG5cblx0XHRcdFx0dGhpcy5jaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLmJhc2VTbGlkZS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcblxuXHRcdFx0XHR0aGlzLmxpQ2xvc2UucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubGlDb2x1bW5JbmZvLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmxpQ2xvc2UsIHRoaXMubGlDb2x1bW5JbmZvKTtcblxuXHRcdFx0XHR0aGlzLnNwaXNva05hbWUgPSAnJztcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gbW9iaWxlTWVudTtcbn0oKTtcblxuLy8gY2xhc3MgdGVtcGxhdGVDYXRhbG9nTmF2IHtcbi8vIFx0Y29uc3RydWN0b3IoKSB7XG4vL1xuLy9cbi8vXG4vL1xuLy8gXHRcdHRoaXMubWVuID0gbmV3IHBhZ2VEcmF3KHtcbi8vIFx0XHRcdGRhdGE6ICcvbWVuLmh0bWwnLFxuLy8gXHRcdFx0ZWxlbWVudDondWwnXG4vLyBcdFx0fSk7XG4vLyBcdFx0dGhpcy5tZW4uZGF0YS50aGVuKChkYXRhKT0+e1xuLy8gXHRcdFx0dGhpcy5tZW4uY29udGVudCA9IGRhdGE7XG4vLyBcdFx0XHR0aGlzLm1lbi5wb3NpdGlvbiA9IFsnYmVmb3JlZW5kJyxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fbWVudS1tZW4nKV07XG4vLyBcdFx0XHR0aGlzLm1lbi5kcmF3O1xuLy8gXHRcdH0pO1xuLy9cbi8vXG4vLyBcdFx0dGhpcy53b21hbiA9IG5ldyBwYWdlRHJhdyh7XG4vLyBcdFx0XHRkYXRhOiAnL3dvbWFuLmh0bWwnLFxuLy8gXHRcdFx0ZWxlbWVudDondWwnXG4vLyBcdFx0fSk7XG4vLyBcdFx0dGhpcy53b21hbi5kYXRhLnRoZW4oKGRhdGEpPT57XG4vLyBcdFx0XHR0aGlzLndvbWFuLmNvbnRlbnQgPSBkYXRhO1xuLy8gXHRcdFx0dGhpcy53b21hbi5wb3NpdGlvbiA9IFsnYmVmb3JlZW5kJyxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fbWVudS13b21hbicpXTtcbi8vIFx0XHRcdHRoaXMud29tYW4uZHJhdztcbi8vIFx0XHR9KTtcbi8vXG4vLyBcdFx0dGhpcy5ib3kgPSBuZXcgcGFnZURyYXcoe1xuLy8gXHRcdFx0ZGF0YTogJy9tZW4uaHRtbCcsXG4vLyBcdFx0XHRlbGVtZW50Oid1bCdcbi8vIFx0XHR9KTtcbi8vIFx0XHR0aGlzLmJveS5kYXRhLnRoZW4oKGRhdGEpPT57XG4vLyBcdFx0XHR0aGlzLmJveS5jb250ZW50ID0gZGF0YTtcbi8vIFx0XHRcdHRoaXMuYm95LnBvc2l0aW9uID0gWydiZWZvcmVlbmQnLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyTW9iaWxlX19tZW51LWJveScpXTtcbi8vIFx0XHRcdHRoaXMuYm95LmRyYXc7XG4vLyBcdFx0fSk7XG4vL1xuLy9cbi8vIFx0XHR0aGlzLmdpcmwgPSBuZXcgcGFnZURyYXcoe1xuLy8gXHRcdFx0ZGF0YTogJy93b21hbi5odG1sJyxcbi8vIFx0XHRcdGVsZW1lbnQ6J3VsJ1xuLy8gXHRcdH0pO1xuLy8gXHRcdHRoaXMuZ2lybC5kYXRhLnRoZW4oKGRhdGEpPT57XG4vLyBcdFx0XHR0aGlzLmdpcmwuY29udGVudCA9IGRhdGE7XG4vLyBcdFx0XHR0aGlzLmdpcmwucG9zaXRpb24gPSBbJ2JlZm9yZWVuZCcsZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVIZWFkZXJNb2JpbGVfX21lbnUtZ2lybCcpXTtcbi8vIFx0XHRcdHRoaXMuZ2lybC5kcmF3O1xuLy8gXHRcdH0pO1xuLy9cbi8vIFx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgcGFnZURyYXcoe1xuLy8gXHRcdFx0ZGF0YTogJy9jb2xsZWN0aW9uLmh0bWwnLFxuLy8gXHRcdFx0ZWxlbWVudDondWwnXG4vLyBcdFx0fSk7XG4vLyBcdFx0dGhpcy5jb2xsZWN0aW9uLmRhdGEudGhlbigoZGF0YSk9Pntcbi8vIFx0XHRcdHRoaXMuY29sbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcbi8vIFx0XHRcdHRoaXMuY29sbGVjdGlvbi5wb3NpdGlvbiA9IFsnYmVmb3JlZW5kJyxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlck1vYmlsZV9fbWVudS1jb2xsZWN0aW9ucycpXTtcbi8vIFx0XHRcdHRoaXMuY29sbGVjdGlvbi5kcmF3O1xuLy8gXHRcdH0pO1xuLy9cbi8vIFx0XHR0aGlzLmljb25zID0gbmV3IHBhZ2VEcmF3KHtcbi8vIFx0XHRcdGRhdGE6ICcvaWNvbnMuaHRtbCcsXG4vLyBcdFx0XHRwb3NpdGlvbjpbJ2FmdGVyZW5kJyxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKV1cbi8vIFx0XHR9KTtcbi8vIFx0XHR0aGlzLmljb25zLmRhdGEudGhlbigoZGF0YSk9Pntcbi8vIFx0XHRcdHRoaXMuaWNvbnMuY29udGVudCA9IGRhdGE7XG4vLyBcdFx0XHR0aGlzLmljb25zLmRyYXc7XG4vLyBcdFx0fSk7XG5cblxuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgbW9iaWxlTWVudSgpO1xufSwgMTI0MCk7XG4vLyBcdH1cbi8vXG4vL1xuLy8gfVxuLy9cbi8vIG5ldyB0ZW1wbGF0ZUNhdGFsb2dOYXYoKTtcbi8vXG4vLyJdLCJmaWxlIjoibWFpbi5qcyJ9
