export class NewsCardList {
  constructor(list, addFunction) {
    this.list = list;
    this.addFunction = addFunction;
  }

  render(arr, i) {
    arr[i].forEach(element => {
      this.list.append(this.addFunction(element));
    });
  }

  clear() {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild)
    };
  }
}

