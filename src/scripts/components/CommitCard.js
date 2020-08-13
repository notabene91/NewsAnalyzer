export class CommitCard {

  constructor(data, markup, formatDate) {
    this.markup = markup;
    this.data = data;
    this.formatDate = formatDate;
  }

  createCard() {
    const newCard = document.createElement('div');
    newCard.classList.add('swiper-slide');
    newCard.insertAdjacentHTML('afterbegin', this.markup);
    newCard.querySelector('.slider-card__date').textContent = this.formatDate(this.data.commit.committer.date)
    newCard.querySelector('.slider-card__avatar').setAttribute('src', `${this.data.author.avatar_url}`);
    newCard.querySelector('.slider-card__name').textContent = this.data.commit.committer.name;
    newCard.querySelector('.slider-card__mail').textContent = this.data.commit.committer.email;
    newCard.querySelector('.slider-card__text').textContent = this.data.commit.message
    return newCard
  }
}