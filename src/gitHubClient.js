class GitHubClient {
  constructor(requestBuilder) {
    this.requestBuilder = requestBuilder;
  }

  getInternPublicRepoUrl(iternName){
    return `https://api.github.com/users/${iternName}/repos`;
  }

  getIternRepos(iternName) {
    let options = {
      uri: this.getInternPublicRepoUrl(iternName),
      headers: {
        "User-Agent":"Chrome"
      }
    };
    return this.requestBuilder(options)
  }

}

exports.GitHubClient = GitHubClient;