import { formatDate } from '../utils/dateFormat';

const INPUT = document.querySelector('.search__input');
const SEARCH_BUTTON = document.querySelector('.search__button');
const NOT_FOUND = document.querySelector('.not-found');
const PRELOADER = document.querySelector('.preloader')
const NEWS_CARD = document.querySelector('#news-card')
const NEWS_CARDS = document.querySelector('.cards');
const CARDS_LIST = document.querySelector('.cards__list');
const isDev = NODE_ENV === 'development' ? 'https://newsapi.org/v2' : 'https://praktikum.tk/news/v2';
const currentDate = new Date();
const dayMS = 86400000;
const weekAgoDate = new Date(currentDate.getTime() - (dayMS * 7));
const SHOW_MORE_BUTTON = document.querySelector('.cards__button');

const CONFIG_NEWS = {
  url: `${isDev}/everything`,
  apiKey: 'e86c20182d654a7c937fd8deb0481039',
  language: 'ru',
  from: `${formatDate(weekAgoDate)}`,
  to: `${formatDate(currentDate)}`,
  sortBy: 'popularity',
  pageSize: '100'
}
const NEWS_MARKUP = `
  <a href="" class="link card" target="_blank">
    <div class="card__image"></div>
    <div class="card__container">
      <div>
        <p class="card__date"></p>
        <h3 class="card__title"></h3>
        <p class="card__text"></p> 
      </div>
      <div>
        <p class="card__source"></p>
      </div>
    </div>
    </a>
  `
const COMMIT_MARKUP = `
  <div class="swiper-slide">
    <p class="slider-card__date"></p>
    <div class="slider-card__container">
      <img src="" alt="Аватар автора." class="slider-card__avatar">
      <div class="slider-card__text-container">
        <h2 class="slider-card__name"></h2>
        <p class="slider-card__mail"></p>
      </div>
    </div>
    <p class="slider-card__text"></p>
  </div>
  `
export {
  INPUT,
  SEARCH_BUTTON,
  CONFIG_NEWS,
  NOT_FOUND,
  PRELOADER,
  NEWS_CARDS,
  CARDS_LIST,
  NEWS_CARD,
  NEWS_MARKUP,
  COMMIT_MARKUP,
  SHOW_MORE_BUTTON,
}