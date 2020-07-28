
import Swiper, { Navigation, Pagination } from 'swiper';
const slider = document.querySelector('.swiper-container');
Swiper.use([Navigation, Pagination]);

let mySwiper = new Swiper(slider, {
  direction: 'horizontal',
  loop: true,
  slidesPerView: '1',
  spaceBetween: 20,
  keyboard: true,
  centeredSlides: true, 
  centeredSlidesBounds: true, 
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
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  }
})