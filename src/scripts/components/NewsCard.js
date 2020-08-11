export class NewsCard {

  constructor(data, markup, formatDate, findLinks) {
    this.markup = markup;
    this.data = data;
    this.formatDate = formatDate;
    this.findLinks = findLinks;
  }

  createCard() {
    const newCard = document.createElement('article');
    newCard.classList.add('article');
    newCard.insertAdjacentHTML('afterbegin', this.markup);
    newCard.querySelector('.card').setAttribute('href', `${this.data.url}`)
    newCard.querySelector('.card__date').textContent = this.formatDate(this.data.publishedAt);
    newCard.querySelector('.card__title').textContent = this.findLinks(this.data.title);
    newCard.querySelector('.card__text').insertAdjacentHTML('afterbegin', this.findLinks(this.data.description));
    newCard.querySelector('.card__source').textContent = this.data.source.name;
    if (this.data.urlToImage === null || this.data.urlToImage === undefined) {
      newCard.querySelector('.card__image').setAttribute('style', `background-image: url(../../images/not-found.svg)`)
    }
    else {
      newCard.querySelector('.card__image').setAttribute('style', `background-image: url(${this.data.urlToImage})`);
    }

    return newCard
  }
}