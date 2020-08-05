import '../pages/index.css';
import { NewsApi } from "./modules/NewsApi";
import { NewsCard } from "./components/NewsCard";
import { NewsCardList } from "./components/NewsCardList";
import { formatDateforCard } from "./utils/dateFormat";

import {
  CONFIG_NEWS as configNews,
  INPUT as input,
  SEARCH_BUTTON as searchButton,
  NOT_FOUND as notFound,
  PRELOADER as preloader,
  NEWS_CARD as newsCard,
  CARDS as cards,
  CARDS_LIST as cardsList,
  NEWS_MARKUP as newsMarkup
} from "./constants/Constants"

const newsApi = new NewsApi(configNews);
const addFunction = (card) => (new NewsCard(card, newsMarkup, formatDateforCard).createCard(newsCard));
const newsCardList = new NewsCardList(cardsList, addFunction);
notFound.classList.remove('not-found_visible');
searchButton.addEventListener('click', evt => {
  evt.preventDefault();
  preloader.classList.add('preloader_visible');
  newsApi.getNews(input.value)
    .then((res) => {
      if (res.totalResults === 0) {
        notFound.classList.add('not-found_visible');
      }
      else {
        console.log(res)
        notFound.classList.remove('not-found_visible');
        cards.classList.add('cards_visible');
        newsCardList.render(res);
      }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      preloader.classList.remove('preloader_visible')
    })
})
