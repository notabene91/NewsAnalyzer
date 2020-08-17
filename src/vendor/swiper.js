
import Swiper, { Navigation, Pagination } from 'swiper';
const slider = document.querySelector('.swiper-container');
Swiper.use([Navigation, Pagination]);

export let mySwiper = new Swiper(slider, {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 8,
  keyboard: true,
  centeredSlides: true,
  grabCursor: true,

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
      slidesPerView: 1,
      spaceBetween: 8,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    550: {
      freeMode: true,
      slidesPerView: 2,
      spaceBetween: 8,
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