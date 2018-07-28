const assert = require("chai").assert;
const GitHubClient = require("../src/gitHubClient.js").GitHubClient;
const sinon = require("sinon");

describe("GitHubClient", function () {
  it("should call request builder for repos of given itern", function () {
    let requestBuilder = sinon.fake();
    let gitHubClient = new GitHubClient(requestBuilder);
    let iternName = "some itern";
    gitHubClient.getIternRepos(iternName)
    assert(requestBuilder.calledOnce)
  })
})

