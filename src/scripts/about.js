import '../pages/about.css';
import '../vendor/swiper.js';

import { GithubApi } from "./modules/GithubApi";
import { DataStorage } from "./modules/DataStorage";
import {
  COMMIT_MARKUP as commitMarkup,
} from "./constants/Constants"

const githubApi = new GithubApi()

githubApi.getCommits()
.then((res) => {
  console.log(res)
}) 