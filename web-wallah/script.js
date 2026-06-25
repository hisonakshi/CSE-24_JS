const swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".award-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});