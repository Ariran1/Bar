'use strict';

var Click = require('../../js/click.js');

console.log(Click,'click');
class dropList {
	constructor() {
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
					event.currentTarget.closest('span').querySelector('[data-droplist-result]').innerHTML = content.innerHTML;
					this.end();
				}
			});

		} else {
			element.style.display = 'none';
		}
	}


}

document.addEventListener('DOMContentLoaded',()=>{
	try {
		new dropList();
	} catch (err) {
		console.log(err);
	}
});
