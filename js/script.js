
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

const slider = new Swiper(".swiper", {
    navigation: {
        nextEl: '.control__arrow-right',
        prevEl: '.control__arrow-left',
        
    },

    autoplay: {
      delay: 3000,
    },

    pagination: {
        el: '.pagination__container',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet"></span>`;
          },
      },

      slidesPerView: 1.1,
      spaceBetween: 8,

      breakpoints: {
        992: {
            slidesPerView: 1.5,
          },

        613: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },

      },
     
});
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


