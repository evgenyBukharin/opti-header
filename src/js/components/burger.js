const burgers = document.querySelectorAll(".burger");
const menu = document.querySelector(".menu");
burgers.forEach((burger) => {
	burger.addEventListener("click", () => {
		if (menu.classList.contains("menu-visible")) {
			menu.classList.remove("menu-visible");
			document.querySelector(".menu__row-nav-opened").classList.remove("menu__row-nav-opened");
		} else {
			menu.classList.add("menu-visible");
		}
	});
});
