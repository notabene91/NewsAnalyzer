import '../pages/index.css';
import { NewsApi } from "./modules/NewsApi";
import { NewsCard } from "./components/NewsCard";
import { DataStorage } from "./modules/DataStorage";
import { NewsCardList } from "./components/NewsCardList";
import { formatDateforCard } from "./utils/dateFormat";
import { findLongWord } from "./utils/findLongWord";
import {
  CONFIG_NEWS as configNews,
  NEWS_MARKUP as newsMarkup,
  input,
  searchForm,
  notFound,
  preloader,
  cardsSection,
  cardsList,
} from "./constants/Constants"

function cardListWhenOpen() {
  notFound.classList.remove('not-found_visible');
  input.value = dataStorage.getItem('input');
  if (localStorage.cards) {
    cardsSection.classList.add('cards_visible');
    newsCardList.render(dataStorage.parseItem('cards').articles);
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
const addFunction = (card) => (new NewsCard(card, newsMarkup, formatDateforCard, findLongWord).createCard());
const newsCardList = new NewsCardList(cardsList, addFunction);
cardListWhenOpen();
searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
  newsCardList.clear();
  dataStorage.removeItem('cards');
  preloader.classList.add('preloader_visible');
  newsApi.getNews(input.value)
    .then((res) => {
      dataStorage.setItem('input', input.value);
      if (res.totalResults === 0) {
        notFound.classList.add('not-found_visible');
      }
      else {
        notFound.classList.remove('not-found_visible');
        cardsSection.classList.add('cards_visible');
        dataStorage.setItem('cards', JSON.stringify(res));
        newsCardList.render(dataStorage.parseItem('cards').articles);
      }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      preloader.classList.remove('preloader_visible')
    })
})



