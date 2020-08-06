export class NewsCardList {
  constructor(list, addFunction) {
    this.list = list;
    this.addFunction = addFunction;
  }

  render(res) {
    res.articles.forEach(element => {
      this.list.append(this.addFunction(element));
    });
  }

  clear() {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild)
    };
  }
}

