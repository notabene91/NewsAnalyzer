export class DataStorage {
  
  setItem(name, item) {
    localStorage.setItem(`${name}`, item);
  }

  getItem(name) {
    return localStorage.getItem(name);
  }

  parseItem(name) {
    return JSON.parse(this.getItem(name));
  }

  removeItem(name) {
    localStorage.removeItem(name)
  }
}
