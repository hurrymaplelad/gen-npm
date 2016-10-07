let {underscored} = require('underscore.string');

module.exports = function(data) {
  let json = base(data);
  return JSON.stringify(json, null, 2);
};

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
      url: `git://github.com/hurrymaplelad/${data.repoSlug}.git`
    },
    homepage: `https://github.com/hurrymaplelad/${data.repoSlug}`,
    bugs: `https://github.com/hurrymaplelad/${data.repoSlug}/issues`,
    license: 'MIT',
    dependencies: {},
    devDependencies: {
      "jshint": '*',
      "mocha": "^3.x.x"
    },
    scripts: {
      "test": "jshint *.js && mocha"
    }
  };
}
