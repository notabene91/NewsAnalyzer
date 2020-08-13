import '../pages/analytics.css';
import { DataStorage } from "./modules/DataStorage";
import { formatAskedWord } from "./utils/formatAskedWord";
import { countWordinTitles } from "./utils/countWordinTitles";
import { formatDateforAnalytics } from "./utils/dateFormat";
import { formatPublishedDate } from "./utils/dateFormat";
import { Statistics } from "./components/Statistics";

import {
  youAsked,
  weeklyNews,
  references,
  CURRENT_DATE as currentDate,
  STATISTIC_MARKUP as statisticMarkup,
  DAY_MS as dayMs,
  statContainer,
} from "./constants/Constants"

(function () {
  const dataStorage = new DataStorage()
  const arrWithPublishedDates = formatPublishedDate(dataStorage.parseItem('cards').articles);
  const statistics = new Statistics(formatDateforAnalytics, statisticMarkup, statContainer, arrWithPublishedDates);
  statistics.countDate(currentDate, 7, dayMs);
  youAsked.textContent = `Вы спросили "${formatAskedWord(dataStorage.getItem('input'))}"`;
  weeklyNews.textContent = `${dataStorage.parseItem('cards').totalResults}`;
  references.textContent = `${countWordinTitles((dataStorage.getItem('input')), (dataStorage.parseItem('cards').articles))}`
})()