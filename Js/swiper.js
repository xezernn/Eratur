const swiper = new Swiper("header .mySwiper", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* Main birinci slider (tuors) */

const swiper2 = new Swiper(".tours .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
  });