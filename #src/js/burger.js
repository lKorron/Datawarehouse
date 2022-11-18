let burgerButton = document.querySelector(".header__burger-icon");
let burger = document.querySelector(".burger");
let wrapper = document.querySelector(".wrapper");

const burgerVisibleClass = "burger_visible";
const burgerButtonEnableClass = "header__burger-icon_enabled";

burgerButton.addEventListener("click", function(evt) {
    if (burger) {
        burger.classList.toggle(burgerVisibleClass);
        burgerButton.classList.toggle(burgerButtonEnableClass);
    }
});

wrapper.addEventListener("click", function(evt) {
    
    if (evt.target.className === "page") {
        burger.classList.remove(burgerVisibleClass);
        burgerButton.classList.remove(burgerButtonEnableClass);
    }
});