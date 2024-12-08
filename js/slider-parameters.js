"use strict"

const swiperFirst = new Swiper('.popular-first__body', {
   loop: true,
   spaceBetween: 30,
   grabCursor: true,
   speed: 800,
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
   },

   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   breakpoints: {
      375: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 4,
      }
   },
});


const swiperSecond = new Swiper('.popular-second__body', {
   loop: true,
   grabCursor: true,
   spaceBetween: 30,
   speed: 800,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   navigation: {
      nextEl: '.popular-second__navigation-next',
      prevEl: '.popular-second__navigation-prev'
   },
   breakpoints: {
      375: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
   }
})