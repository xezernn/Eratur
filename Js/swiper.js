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


  const swiper3 = new Swiper(".discover .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      970: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1244: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });