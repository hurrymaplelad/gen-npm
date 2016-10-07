gen-npm
=======

Generate a node package to be published to npm.

[![Build Status](http://img.shields.io/travis/hurrymaplelad/gen-npm/master.svg?style=flat-square)](https://travis-ci.org/hurrymaplelad/gen-npm)

Install
--------
```sh
$ npm install -g git+https://github.com/hurrymaplelad/gen-npm
# OR
$ git clone https://github.com/hurrymaplelad/gen-npm.git
$ cd gen-npm && npm link
```
`gen-npm` isn't published to NPM, since it's full of my personal preferences.  

Examples
--------
```sh
$ gen-npm foo-mod
# Creates ./foo-mod/*

$ gen-npm
# Creates ./* based on pwd
```

Running Tests
-------------
You'll need [BATS](https://github.com/sstephenson/bats):
```
$ brew install bats
```
Then the usual
```
$ npm test
```


Prior Art
----------
[generator-hmlad](https://github.com/hurrymaplelad/generator-hmlad) - Yeoman based predecessor.
