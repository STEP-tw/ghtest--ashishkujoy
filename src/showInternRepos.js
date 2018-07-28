const GitHubClient = require("./gitHubClient.js").GitHubClient;

const showIternRepos = function(iternName,request) {
  let repoPromise = new GitHubClient(request).getIternRepos(iternName);
  repoPromise.then(function(repo) {
    JSON.parse(repo).forEach(element => {
      console.log(element.name)
    });
  });
}
exports.showIternRepos = showIternRepos