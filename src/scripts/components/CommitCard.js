export class CommitCard {

  constructor(data, markup) {
    this.markup = markup;
    this.data = data;
  }

  createCard() {
    const newCard = document.createElement('div');
    newCard.classList.add('swiper-slide');
    newCard.insertAdjacentHTML('afterbegin', this.markup);
    newCard.querySelector('.slider-card__avatar').setAttribute('src', `${this.data.author.avatar_url}`);
    newCard.querySelector('.slider-card__name').textContent = "Александр Шабалин";
    if (this.data.commit.author.email = '61543007+notabene91@users.noreply.github.com') {
      this.data.commit.author.email = 'notabene1991@yandex.ru'
    }
    newCard.querySelector('.slider-card__mail').textContent = this.data.commit.author.email;
    newCard.querySelector('.slider-card__text').textContent = this.data.commit.message
    return newCard
  }
}