const burgers = document.querySelectorAll(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
burgers.forEach((burger) => {
	burger.addEventListener("click", () => {
		if (menu.classList.contains("menu-visible")) {
			menu.classList.remove("menu-visible");
			document.querySelector(".menu__row-nav-opened")?.classList.remove("menu__row-nav-opened");
			body.style.overflow = "unset";
		} else {
			menu.classList.add("menu-visible");
			body.style.overflow = "auto";
		}
	});
});
