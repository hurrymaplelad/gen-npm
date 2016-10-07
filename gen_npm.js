#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {dasherize} = require('underscore.string');
const prompt = require('inquirer').createPromptModule();

const DATA = {
  githubUser: 'hurrymaplelad'
};

// Gather user name and email
function discoverAuthor() {
  return new Promise((resolve, reject) => {
    const gitConfig = require('git-config');
    gitConfig((err, config) => {
      if(err) return reject(err);
      let user = {
        name: 'Adam Hull',
        email: 'adam@hmlad.com'
      };
      if(config && config.user) user = config.user;
      resolve(user);
    });
  });
}

function renderJSON(destPath, obj) {
  fs.writeFileSync(
    destPath,
    JSON.stringify(obj, null, 2)
  );
}

function renderHandlebars(destPath, templatePath, data) {
  const Handlebars = require('handlebars');
  fs.writeFileSync(
    destPath,
    Handlebars.compile(
      fs.readFileSync(`${__dirname}/${templatePath}`, 'utf8')
    )(data)
  );
}

// Optional directory name as first arg
let repoSlug = process.argv[2];
if(repoSlug) {
  fs.mkdirSync(repoSlug);
  process.chdir(repoSlug);
} else {
  // use current directory name
  repoSlug = path.basename(process.cwd());
}

discoverAuthor()
.then((author) => {
  let pkgName = dasherize(repoSlug);
  return prompt([
    {
      type: 'input',
      name: 'pkgName',
      message: 'Name your NPM package',
      default: pkgName
    }, {
      type: 'input',
      name: 'description',
      message: 'Describe your package',
      default: ''
    }, {
      type: 'input',
      name: 'keywords',
      message: 'Keywords?',
      default: '',
      filter: (input) => {
        return input.split(',')
        .map((term) => term.trim())
        .filter(Boolean);
      }
    }
  ]).then((data) => {
    Object.assign(data, DATA);
    data.repoSlug = repoSlug;
    data.author = author;
    return data;
  });
}).then((data) => {

    renderJSON('package.json', require('./templates/package_json')(data));
    renderHandlebars('README.md', './templates/_README.md', data);

}).catch((err) => {
  console.error(err);
  process.exit(1);
});
