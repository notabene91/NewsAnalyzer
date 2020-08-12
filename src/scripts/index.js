import '../pages/index.css';
import { NewsApi } from "./modules/NewsApi";
import { NewsCard } from "./components/NewsCard";
import { NewsCardList } from "./components/NewsCardList";
import { SearchInput } from "./components/SearchInput"
import { DataStorage } from "./modules/DataStorage";
import { formatDateforCard } from "./utils/dateFormat";
import { findLinks } from "./utils/findLongWord";
import {
  CONFIG_NEWS as configNews,
  NEWS_MARKUP as newsMarkup,
  input,
  searchForm,
  notFound,
  preloader,
  cardsSection,
  cardsList,
  searchButton,
  searchError
} from "./constants/Constants"


// searchForm.addEventListener('submit', evt => {
//   evt.preventDefault()
// })

function cardListWhenOpen() {
  notFound.classList.remove('not-found_visible');
  input.value = dataStorage.getItem('input');
  searchButton.classList.add('search__button_inactive')
  if (!localStorage.input) {
    searchButton.setAttribute('disabled', true);
  }
  if (localStorage.cards) {
    cardsSection.classList.add('cards_visible');
    newsCardList.render(dataStorage.parseItem('cards').articles);
  }
}

function renderNewsCards() {
  newsCardList.clear();
  dataStorage.removeItem('cards');
  searchButton.setAttribute('disabled', true);
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
      alert(`Ошибка: ${err}`)
    })
    .finally(() => {
      preloader.classList.remove('preloader_visible')
      searchButton.removeAttribute('disabled');
    })
}

const dataStorage = new DataStorage();
const newsApi = new NewsApi(configNews);
const addFunction = (card) => (new NewsCard(card, newsMarkup, formatDateforCard, findLinks).createCard());
const newsCardList = new NewsCardList(cardsList, addFunction);
const searchInput = new SearchInput(renderNewsCards, searchForm, input, searchButton, searchError)
cardListWhenOpen();

searchInput.setEventListeners()


