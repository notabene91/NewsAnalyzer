export class NewsApi {
  constructor(config) {
    this.config = config;
  }
  getNews(question) {
    return fetch(`${this.config.url}?apiKey=${this.config.apiKey}&q=${question}&language=${this.config.language}&from=${this.config.from}&to=${this.config.to}&sortBy=${this.config.sortBy}&pageSize=${this.config.pageSize}`, {
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
  }
}
