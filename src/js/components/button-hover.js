const btns = document.querySelectorAll(".header__button-phone-blue");

btns.forEach((button) => {
	button.addEventListener("mouseenter", function (e) {
		let size = Math.max(this.offsetWidth, this.offsetHeight),
			x = e.offsetX - size / 2,
			y = e.offsetY - size / 2,
			wave = this.querySelector(".header__wave");

		// Create an element if it doesn't exist
		if (!wave) {
			wave = document.createElement("span");
			wave.className = "header__wave";
		}
		wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`;
		this.appendChild(wave);
	});
});
