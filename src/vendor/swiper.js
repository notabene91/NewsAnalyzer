
import Swiper, { Navigation, Pagination } from 'swiper';
const slider = document.querySelector('.swiper-container');
Swiper.use([Navigation, Pagination]);

let mySwiper = new Swiper(slider, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: '3',
    spaceBetween: 16,
    keyboard: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})