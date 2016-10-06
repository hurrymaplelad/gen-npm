gen-npm
==============

Generate a node package to be published to npm.

[![Build Status](http://img.shields.io/travis/hurrymaplelad/gen-npm/master.svg?style=flat-square)](https://travis-ci.org/hurrymaplelad/gen-npm)

Getting Started
---------------
gen-npm isn't published to NPM, since it's full of my personal preferences.  Install via URL instead:

```
$ npm install -g git+https://github.com/hurrymaplelad/gen-npm
```

Or even better, checkout and link the repo to quickly fix things that don't work right:
```
$ git clone https://github.com/hurrymaplelad/gen-npm.git
$ cd gen-npm && npm link
```

Then you can start a new node module with:
```
$ mkdir foo && cd foo && gen-npm
```


Prior Art
----------
[generator-hmlad](https://github.com/hurrymaplelad/generator-hmlad) - Yeoman based predecessor.
