/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 732:
/***/ (() => {

const burgers = document.querySelectorAll(".burger");
const menu = document.querySelector(".menu");
burgers.forEach(burger => {
  burger.addEventListener("click", () => {
    if (menu.classList.contains("menu-visible")) {
      menu.classList.remove("menu-visible");
      document.querySelector(".menu__row-nav-opened").classList.remove("menu__row-nav-opened");
    } else {
      menu.classList.add("menu-visible");
    }
  });
});

/***/ }),

/***/ 346:
/***/ (() => {

const btns = document.querySelectorAll(".header__button-phone-blue");
btns.forEach(button => {
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

/***/ }),

/***/ 2:
/***/ (() => {

const url = new URL(window.location.href);
if (url.searchParams.get("city") == null) {
  url.searchParams.set("city", "Челябинск");
}
history.pushState(null, null, url);
const currentCityTextContainers = document.querySelectorAll(".currentCity");
currentCityTextContainers.forEach(textContainer => {
  textContainer.innerHTML = url.searchParams.get("city");
});
const cityButtons = document.querySelectorAll(".menu__link-inner-city");
cityButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    url.searchParams.set("city", btn.innerHTML);
    history.pushState(null, null, url);
    window.location.reload();
  });
});
const resultsContainer = document.querySelector(".city__results");
const citiesList = ["Челябинск", "Екатеринбург", "Москва", "Магнитогорск"];
function drawCities(cities) {
  let applyClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  resultsContainer.innerHTML = "";
  cities.forEach(city => {
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
  let filteredCities = citiesList.filter(city => {
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
citiesSection.addEventListener("click", e => {
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
citiesContainer.addEventListener("click", e => {
  e.stopPropagation();
});

/***/ }),

/***/ 349:
/***/ (() => {

const menuNavRows = document.querySelectorAll(".menu__row-nav");
menuNavRows.forEach(row => {
  let listContainer = row.querySelector(".menu__container-list");
  if (listContainer) {
    let backButton = row.querySelector(".menu__button-back");
    row.addEventListener("click", () => {
      row.classList.add("menu__row-nav-opened");
    });
    backButton.addEventListener("click", e => {
      e.stopPropagation();
      row.classList.remove("menu__row-nav-opened");
    });
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/_vars.js
/* harmony default export */ const _vars = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});
// EXTERNAL MODULE: ./src/js/components/button-hover.js
var button_hover = __webpack_require__(346);
// EXTERNAL MODULE: ./src/js/components/burger.js
var burger = __webpack_require__(732);
// EXTERNAL MODULE: ./src/js/components/menu-dropdowns.js
var menu_dropdowns = __webpack_require__(349);
// EXTERNAL MODULE: ./src/js/components/current-city.js
var current_city = __webpack_require__(2);
;// CONCATENATED MODULE: ./src/js/_components.js




;// CONCATENATED MODULE: ./src/js/main.js




})();

/******/ })()
;