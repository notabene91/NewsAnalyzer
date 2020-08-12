import '../pages/about.css';
import {mySwiper} from '../vendor/swiper.js';
import { GithubApi } from "./modules/GithubApi";
import { CommitCard } from "./components/CommitCard";
import { CommitCardList } from './components/CommitCardList';
import { formatDateforCard } from "./utils/dateFormat";
import {
  COMMIT_MARKUP as commitMarkup,
  commitsContainer
} from "./constants/Constants"

const githubApi = new GithubApi();
const addFunction = (card) => (new CommitCard(card, commitMarkup, formatDateforCard).createCard());
const commitCardList =  new CommitCardList(commitsContainer, addFunction);
githubApi.getCommits()
.then((res) => {
  commitCardList.render(res);
  mySwiper.update()
}) 
.catch(err => {
  alert(`Ошибка: ${err}`)
})
