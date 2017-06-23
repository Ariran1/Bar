module.exports = class click {
	constructor(options) {
		this.element = options.element || window;
		this.callback = options.callback.bind(this);
		this.parent = options.parent || null;

		this.Listener();
	}

	Listener() {
		this.element.addEventListener('click',this.callback);
	}

	end() {
		this.element.removeEventListener('click',this.callback);
	}
}
