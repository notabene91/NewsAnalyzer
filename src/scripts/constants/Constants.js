const INPUT = document.querySelector('.search__input');
const SEARCH_BUTTON = document.querySelector('.search__button');
const NOT_FOUND = document.querySelector('.not-found');
const PRELOADER = document.querySelector('.preloader')
const NEWS_CARD = document.querySelector('#news-card')
const CARDS = document.querySelector('.cards');
const CARDS_LIST = document.querySelector('.cards__list');
const isDev = NODE_ENV === 'development' ? 'https://newsapi.org/v2' : 'https://praktikum.tk/news/v2';
const CONFIG_NEWS = {

  url: `${isDev}/everything`,
  apiKey: 'e86c20182d654a7c937fd8deb0481039',
  language: 'ru',
  from: '2020-07-27',
  to: '2020-08-04',
  sortBy: 'relevancy',
  pageSize: '100'
}
const NEWS_MARKUP = `
  <article class="card">
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
  </article>`
export {
  INPUT,
  SEARCH_BUTTON,
  CONFIG_NEWS,
  NOT_FOUND,
  PRELOADER,
  CARDS,
  CARDS_LIST,
  NEWS_CARD,
  NEWS_MARKUP
}