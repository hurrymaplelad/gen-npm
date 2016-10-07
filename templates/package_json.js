let {underscored} = require('underscore.string');

function formatUser(u){
  if(u.name && u.email) return `${u.name} <${u.email}>`;
  if(u.name || u.email) return u.name || u.email;
  return u;
}

function base(data) {
  return {
    name: data.pkgName,
    version: "0.0.0",
    description: data.description,
    author: formatUser(data.author),
    keywords: data.keywords && data.keywords.length ? data.keywords : undefined,
    main: underscored(data.pkgName),
    repository: {
      type: "git",
      url: `git://github.com/${data.githubUser}/${data.repoSlug}.git`
    },
    homepage: `https://github.com/${data.githubUser}/${data.repoSlug}`,
    bugs: `https://github.com/${data.githubUser}/${data.repoSlug}/issues`,
    license: 'MIT',
    dependencies: {},
    devDependencies: {
      "jshint": '*',
      "mocha": "^3.x.x"
    },
    scripts: {
      "test": "jshint *.js && mocha"
    },
    jshintConfig: {
      "esversion": 6
    }
  };
}

module.exports = base;
