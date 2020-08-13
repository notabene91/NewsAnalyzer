//Функция для подсчета упоминания слова в заголовках

export function countWordinTitles(word, articles) {
  let result = 0;
  let keyWord = word.toLowerCase()
  articles.forEach((article) => {
   article.title.toLowerCase().includes(keyWord) ? result ++ : result += 0;
  })
  return result
}