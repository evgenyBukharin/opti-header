const menuNavRows = document.querySelectorAll(".menu__row-nav");
menuNavRows.forEach((row) => {
	let listContainer = row.querySelector(".menu__container-list");
	if (listContainer) {
		let backButton = row.querySelector(".menu__button-back");
		row.addEventListener("click", () => {
			row.classList.add("menu__row-nav-opened");
		});
		backButton.addEventListener("click", (e) => {
			e.stopPropagation();
			row.classList.remove("menu__row-nav-opened");
		});
	}
});
