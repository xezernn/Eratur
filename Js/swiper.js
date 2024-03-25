const swiper = new Swiper(".headerSlider .mySwiper", {
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

// main slider 2 Azerbaycani kesf et 

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


//  main slider 3 sirketler

const swiper4 = new Swiper(".companySlider1 .mySwiper", {
  // changeLanguageDirection(),
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
});

const swiper5 = new Swiper(".companySlider2 .mySwiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
});

// comments section slider 

const comSwiper = new Swiper(".comments .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});