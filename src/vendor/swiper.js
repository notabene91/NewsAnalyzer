
import Swiper, { Navigation, Pagination } from 'swiper';
const slider = document.querySelector('.swiper-container');
Swiper.use([Navigation, Pagination]);

let mySwiper = new Swiper(slider, {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 8,
  keyboard: true,
  centeredSlides: true,
  centerInsufficientSlides: true,
  grabCursor: true,
  freeMode: true,
  touchEventsTarget: 'wrapper',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      freeMode: false,
      slidesPerView: 1,
      spaceBetween: 8,
    },
    375: {
      freeMode: true,
      slidesPerView: 1,
      spaceBetween: 8,
    },
    870: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 8,
      freeMode: false,
    },
    1320: {
      slidesPerView: 4,
      spaceBetween: 16,
      freeMode: false,
    }
  }
})