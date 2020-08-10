import { NewsCardList } from "./NewsCardList";

export class CommitCardList extends NewsCardList{
  constructor(list, addFunction) {
    super(list, addFunction)
  }

  render(arr) {
    arr.forEach(element => {
      this.list.append(this.addFunction(element));
    });
  }
}