import { formatDate } from '../utils/dateFormat';

const input = document.querySelector('#search');
const searchForm = document.forms.search;
const searchButton = document.querySelector('.search__button')
const searchError = document.querySelector('.search__error')
const notFound = document.querySelector('.not-found');
const preloader = document.querySelector('.preloader')
const cardsSection = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');
const commitsContainer = document.querySelector('.swiper-wrapper')
const showMoreButton = document.querySelector('.cards__button');
const youAsked = document.querySelector('.asked__title');
const weeklyNews = document.querySelector('.weeklynews');
const references = document.querySelector('.references');
const month = document.querySelector('.month')
const showMoreBtn = document.querySelector('.cards__button');
const statContainer = document.querySelector('.statistic__container');
const isDev = NODE_ENV === 'development' ? 'https://newsapi.org/v2' : 'https://nomoreparties.co/news/v2';
const CURRENT_DATE = new Date();
const DAY_MS = 86400000;
const WEEK_AGO_DATE = new Date(CURRENT_DATE.getTime() - (DAY_MS * 7));


const CONFIG_NEWS = {
  url: `${isDev}/everything`,
  apiKey: 'e86c20182d654a7c937fd8deb0481039',
  language: 'ru',
  from: `${formatDate(WEEK_AGO_DATE)}`,
  to: `${formatDate(CURRENT_DATE)}`,
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
    <p class="slider-card__date"></p>
    <div class="slider-card__container">
      <img src="" alt="Аватар автора." class="slider-card__avatar">
      <div class="slider-card__text-container">
        <h2 class="slider-card__name"></h2>
        <p class="slider-card__mail"></p>
      </div>
    </div>
    <p class="slider-card__text"></p>
  `

const STATISTIC_MARKUP = `
  <span class="statistic__date"></span>
  <div class="statistic__bar">
    <span class="statistic__count"></span>
  </div>
`

export {
  NEWS_MARKUP,
  COMMIT_MARKUP,
  CONFIG_NEWS,
  CURRENT_DATE,
  WEEK_AGO_DATE,
  STATISTIC_MARKUP,
  DAY_MS,
  input,
  searchButton,
  searchForm,
  searchError,
  notFound,
  preloader,
  cardsSection,
  cardsList,
  commitsContainer,
  showMoreButton,
  youAsked,
  weeklyNews,
  references,
  month,
  statContainer,
  showMoreBtn
}