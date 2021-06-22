const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site');

const sampleAnswers = require('./sample-answers');

writeFile(generatePage(sampleAnswers))
  .then(res => {
    console.log(res);
    return copyFile();
  })
  .then(res => {
    console.log(res);
    console.log('All Done!');
  })
  .catch(err => {
    console.log(err);
  });
