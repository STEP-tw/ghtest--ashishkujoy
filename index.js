const request = require('request-promise');
const showInternRepos = require('./src/showInternRepos.js').showIternRepos;

const interName = process.argv[2];

showInternRepos(interName,request);
console.log(showInternRepos)