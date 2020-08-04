export class NewsCard {

  constructor(data, markup) {
    this.markup = markup
    this.data = data
  }

  createCard() {
    const newCard = document.createElement('div');
    newCard.insertAdjacentHTML('afterbegin', this.markup);
    newCard.querySelector('.card__date').textContent = '19 августа';
    newCard.querySelector('.card__title').textContent = this.data.title;
    newCard.querySelector('.card__text').textContent = this.data.description;
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