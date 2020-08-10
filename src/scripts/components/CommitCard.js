export class CommitCard {

  constructor(data, markup) {
    this.markup = markup;
    this.data = data;
  }

  createCard() {
    const newCard = document.createElement('article');
    newCard.classList.add('article');
    newCard.insertAdjacentHTML('afterbegin', this.markup);
    newCard.querySelector('.card').setAttribute('href', `${this.data.url}`)
    newCard.querySelector('.card__date').textContent = this.formatFunc(this.data.publishedAt);
    newCard.querySelector('.card__title').textContent = this.findLongWord(this.data.title);
    newCard.querySelector('.card__text').textContent = this.findLongWord(this.data.description);
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