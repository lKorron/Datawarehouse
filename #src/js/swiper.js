
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