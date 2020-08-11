import '../pages/about.css';
import {mySwiper} from '../vendor/swiper.js';
import { GithubApi } from "./modules/GithubApi";
import { DataStorage } from "./modules/DataStorage";
import { CommitCard } from "./components/CommitCard";
import { CommitCardList } from './components/CommitCardList';
import {
  COMMIT_MARKUP as commitMarkup,
  commitsContainer
} from "./constants/Constants"



const dataStorage = new DataStorage();
const githubApi = new GithubApi();
const addFunction = (card) => (new CommitCard(card, commitMarkup).createCard());
const commitCardList =  new CommitCardList(commitsContainer, addFunction);
githubApi.getCommits()
.then((res) => {
  dataStorage.setItem('commits', JSON.stringify(res));  
  commitCardList.render(dataStorage.parseItem('commits'));
  mySwiper.update()
}) 
.catch(err => {
  console.log(err)
})
