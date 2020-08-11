export class Statistics {
  constructor(formatFunc, markup, statContainer) {
    this.formatFunc = formatFunc;
    this.markup = markup;
    this.statContainer = statContainer;
  }

  countDate(currentDay, daysAgo, dayMs) {
    let dateArray = [];
    for (let i = daysAgo; i >= 0; i--) {
      let segmentDay = new Date(currentDay.getTime() - (dayMs * i))
      dateArray.push(this.formatFunc(segmentDay))
    }
    this._renderDate(dateArray)
  }

  _renderDate(arr) { 

    arr.forEach((item) => {
      this.statContainer.insertAdjacentHTML('afterbegin', this.markup)
      this.statContainer.querySelector('.statistic__date').textContent = item;
    })
  }
}

