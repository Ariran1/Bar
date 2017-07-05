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

class inputsHeader {
	constructor() {
		var inputs = document.querySelectorAll('.siteHeader input[type="text"]');

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
