class Lightbox {

	constructor(width, height, content) {

		this.width = width;
		this.height = height;
		this.content = content;

		this.html = '';

		this.createLightbox();
	}

	createLightbox() {

		const content = this.content;

		this.html = 
			`<div class="lightbox">
				${content}
			</div>`
		;
	}

	appendLightbox() {
		this.querySelector('body').innerHTML += this.html;
	}
}
