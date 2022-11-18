let popupButton = document.querySelector(".header__button");
let popup = document.querySelector(".popup-request")

const popupVisibleClass = "popup_active";


popupButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add(popupVisibleClass);
});

popup.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains("popup_active") || evt.target.classList.contains("popup__container")) {
        popup.classList.remove(popupVisibleClass);
    }
    
});

