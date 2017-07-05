'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function () {
	// class catalogShowHover {
	// 	constructor() {
	// 		this.element = document.querySelector('.siteHeader__catalogButton');

	// 		this.setFunction();

	// 		window.addEventListener('resize',()=>{
	// 			this.setFunction();
	// 		});


	// 		this.mouseenter = () => {
	// 			document.getElementById('showCatalog__aDASfgFA').checked = true;

	// 			this.catalogEnteredListener = document.querySelector('.siteHeader__catalogNav').addEventListener('mouseenter',()=>{
	// 				this.catalogEntered = true;
	// 			});
	// 		};

	// 		this.mouseleave = () => {

	// 			let a = setTimeout(()=>{
	// 				if (!this.catalogEntered) {
	// 					document.getElementById('showCatalog__aDASfgFA').checked = false;
	// 				} else {
	// 					document.querySelector('.siteHeader__catalogNav').addEventListener('mouseleave',()=>{
	// 						this.catalogEntered = false;
	// 						document.getElementById('showCatalog__aDASfgFA').checked = false;
	// 					});
	// 				}
	// 			},1000)

	// 		};

	// 		this.mouseenter();
	// 	}

	// 	setFunction() {

	// 		if (document.body.clientWidth > 1000) {
	// 			if(this.deskResizeAdded) return;


	// 			this.element.addEventListener('mouseenter',this.mouseenter);
	// 			this.element.addEventListener('mouseleave',this.mouseleave);
	// 			this.deskResizeAdded = true;
	// 			this.mobResizeAdded = false;

	// 		} else {
	// 			if(this.mobResizeAdded) return;


	// 			this.deskResizeAdded = false;
	// 			this.mobResizeAdded = true;

	// 		}

	// 	}

	// }

	// new catalogShowHover();

	var inputsHeader = function inputsHeader() {
		_classCallCheck(this, inputsHeader);

		var inputs = document.querySelectorAll('.siteHeader input[type="text"]');

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
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuIWZ1bmN0aW9uICgpIHtcblx0Ly8gY2xhc3MgY2F0YWxvZ1Nob3dIb3ZlciB7XG5cdC8vIFx0Y29uc3RydWN0b3IoKSB7XG5cdC8vIFx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlcl9fY2F0YWxvZ0J1dHRvbicpO1xuXG5cdC8vIFx0XHR0aGlzLnNldEZ1bmN0aW9uKCk7XG5cblx0Ly8gXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XG5cdC8vIFx0XHRcdHRoaXMuc2V0RnVuY3Rpb24oKTtcblx0Ly8gXHRcdH0pO1xuXG5cblx0Ly8gXHRcdHRoaXMubW91c2VlbnRlciA9ICgpID0+IHtcblx0Ly8gXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDYXRhbG9nX19hREFTZmdGQScpLmNoZWNrZWQgPSB0cnVlO1xuXG5cdC8vIFx0XHRcdHRoaXMuY2F0YWxvZ0VudGVyZWRMaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlSGVhZGVyX19jYXRhbG9nTmF2JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9Pntcblx0Ly8gXHRcdFx0XHR0aGlzLmNhdGFsb2dFbnRlcmVkID0gdHJ1ZTtcblx0Ly8gXHRcdFx0fSk7XG5cdC8vIFx0XHR9O1xuXG5cdC8vIFx0XHR0aGlzLm1vdXNlbGVhdmUgPSAoKSA9PiB7XG5cblx0Ly8gXHRcdFx0bGV0IGEgPSBzZXRUaW1lb3V0KCgpPT57XG5cdC8vIFx0XHRcdFx0aWYgKCF0aGlzLmNhdGFsb2dFbnRlcmVkKSB7XG5cdC8vIFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0NhdGFsb2dfX2FEQVNmZ0ZBJykuY2hlY2tlZCA9IGZhbHNlO1xuXHQvLyBcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZUhlYWRlcl9fY2F0YWxvZ05hdicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT57XG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMuY2F0YWxvZ0VudGVyZWQgPSBmYWxzZTtcblx0Ly8gXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDYXRhbG9nX19hREFTZmdGQScpLmNoZWNrZWQgPSBmYWxzZTtcblx0Ly8gXHRcdFx0XHRcdH0pO1xuXHQvLyBcdFx0XHRcdH1cblx0Ly8gXHRcdFx0fSwxMDAwKVxuXG5cdC8vIFx0XHR9O1xuXG5cdC8vIFx0XHR0aGlzLm1vdXNlZW50ZXIoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRzZXRGdW5jdGlvbigpIHtcblxuXHQvLyBcdFx0aWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiAxMDAwKSB7XG5cdC8vIFx0XHRcdGlmKHRoaXMuZGVza1Jlc2l6ZUFkZGVkKSByZXR1cm47XG5cblxuXHQvLyBcdFx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsdGhpcy5tb3VzZWVudGVyKTtcblx0Ly8gXHRcdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLHRoaXMubW91c2VsZWF2ZSk7XG5cdC8vIFx0XHRcdHRoaXMuZGVza1Jlc2l6ZUFkZGVkID0gdHJ1ZTtcblx0Ly8gXHRcdFx0dGhpcy5tb2JSZXNpemVBZGRlZCA9IGZhbHNlO1xuXG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRpZih0aGlzLm1vYlJlc2l6ZUFkZGVkKSByZXR1cm47XG5cblxuXHQvLyBcdFx0XHR0aGlzLmRlc2tSZXNpemVBZGRlZCA9IGZhbHNlO1xuXHQvLyBcdFx0XHR0aGlzLm1vYlJlc2l6ZUFkZGVkID0gdHJ1ZTtcblxuXHQvLyBcdFx0fVxuXG5cdC8vIFx0fVxuXG5cdC8vIH1cblxuXHQvLyBuZXcgY2F0YWxvZ1Nob3dIb3ZlcigpO1xuXG5cdHZhciBpbnB1dHNIZWFkZXIgPSBmdW5jdGlvbiBpbnB1dHNIZWFkZXIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIGlucHV0c0hlYWRlcik7XG5cblx0XHR2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpdGVIZWFkZXIgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbnB1dHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzVmFsdWUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hhc1ZhbHVlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzVmFsdWUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hhc1ZhbHVlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdoYXNWYWx1ZScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGFzVmFsdWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdG5ldyBkZXNrdG9wSGVhZGVyKCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ9Ce0YjQuNCx0LrQsCDQsiDRgdC60YDQuNC/0YLQtSDRiNCw0L/QutC4INC00LXRgdC60YLQvtC/0LAsINCy0L7Qt9C80L7QttC90L4g0L3QtdGCINC40L3Qv9GD0YLQvtCyINC70LjRh9C90L7Qs9C+INC60LDQsdC40L3QtdGC0LAg0LjQu9C4INC90LUg0YPQtNCw0LXRgtGB0Y8g0LjRhSDQvdCw0LnRgtC4LicsIGUpO1xuXHRcdH1cblx0fSk7XG59KCk7Il0sImZpbGUiOiJtYWluLmpzIn0=
