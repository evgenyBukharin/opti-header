const url = new URL(window.location.href);
if (url.searchParams.get("city") == null) {
	url.searchParams.set("city", "Челябинск");
}
history.pushState(null, null, url);

const currentCityTextContainers = document.querySelectorAll(".currentCity");
currentCityTextContainers.forEach((textContainer) => {
	textContainer.innerHTML = url.searchParams.get("city");
});

const cityButtons = document.querySelectorAll(".menu__link-inner-city");
cityButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		url.searchParams.set("city", btn.innerHTML);
		history.pushState(null, null, url);
		window.location.reload();
	});
});

const resultsContainer = document.querySelector(".city__results");
const citiesList = ["Челябинск", "Екатеринбург", "Москва", "Магнитогорск"];
function drawCities(cities, applyClick = true) {
	resultsContainer.innerHTML = "";
	cities.forEach((city) => {
		let newResult = document.createElement("div");
		newResult.classList = "city__result";
		newResult.innerHTML = city;
		if (applyClick) {
			newResult.addEventListener("click", () => {
				url.searchParams.set("city", city);
				history.pushState(null, null, url);
				window.location.reload();
			});
		}
		resultsContainer.appendChild(newResult);
	});
}

drawCities(citiesList);

const searchInput = document.getElementById("city-search");
searchInput.addEventListener("input", () => {
	let filteredCities = citiesList.filter((city) => {
		return city.toLowerCase().includes(searchInput.value.toLowerCase());
	});
	if (filteredCities.length !== 0) {
		drawCities(filteredCities);
	} else {
		drawCities(["Совпадений нет"], false);
	}
});

const citiesSection = document.querySelector(".city");
function hideCitiesSection() {
	citiesSection.classList.remove("city-visible");
}
function showCitiesSection() {
	citiesSection.classList.add("city-visible");
}

citiesSection.addEventListener("click", (e) => {
	hideCitiesSection();
});

const closeButton = document.querySelector(".city__button-close");
closeButton.addEventListener("click", () => {
	hideCitiesSection();
});

const openButton = document.querySelector(".header__button-location");
openButton.addEventListener("click", () => {
	showCitiesSection();
});

const citiesContainer = document.querySelector(".city__container");
citiesContainer.addEventListener("click", (e) => {
	e.stopPropagation();
});
