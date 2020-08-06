import '../pages/index.css';
import { NewsApi } from "./modules/NewsApi";
import { NewsCard } from "./components/NewsCard";
import { DataStorage } from "./modules/DataStorage";
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
  NEWS_MARKUP as newsMarkup,
  SHOW_MORE_BUTTON as showMoreButton
} from "./constants/Constants"

function cardListWhenOpen() {
  notFound.classList.remove('not-found_visible');
  input.value = dataStorage.getItem('input');
  if (localStorage.cards) {
    cards.classList.add('cards_visible');
    newsCardList.render((sliceStorageNews(dataStorage.parseItem('cards').articles)), 0);
  }
}
function sliceStorageNews(articles) {
  let tempArr = [];
  for (let i = 0; i < articles.length; i += 3) {
    tempArr.push(articles.slice(i, i + 3))
  }
  return tempArr
}
const dataStorage = new DataStorage();
const newsApi = new NewsApi(configNews);
const addFunction = (card) => (new NewsCard(card, newsMarkup, formatDateforCard).createCard(newsCard));
const newsCardList = new NewsCardList(cardsList, addFunction);
cardListWhenOpen();
searchButton.addEventListener('click', evt => {
  evt.preventDefault();
  dataStorage.setItem('input', input.value);
  newsCardList.clear();
  dataStorage.removeItem('cards');
  preloader.classList.add('preloader_visible');
  newsApi.getNews(input.value)
    .then((res) => {
      if (res.totalResults === 0) {
        notFound.classList.add('not-found_visible');
      }
      else {
        notFound.classList.remove('not-found_visible');
        cards.classList.add('cards_visible');
        dataStorage.setItem('cards', JSON.stringify(res));
        newsCardList.render((sliceStorageNews(dataStorage.parseItem('cards').articles)), 0);
      }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      preloader.classList.remove('preloader_visible')
    })
})
let i = 1;

showMoreButton.addEventListener('click', () => {
  i++
  newsCardList.render((sliceStorageNews(dataStorage.parseItem('cards').articles)), i);
})


