export class GithubApi {
  constructor() {
  }
  getCommits() {
    return fetch('https://api.github.com/repos/notabene91/NewsAnalyzer/commits', {
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
  }
}
