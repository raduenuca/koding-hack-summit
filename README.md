# Introduction

[![Build Status](https://travis-ci.org/raduenuca/koding-hack-summit.svg?branch=master)](https://travis-ci.org/raduenuca/koding-hack-summit)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/raduenuca/koding-hack-summit.svg)](https://david-dm.org/raduenuca/koding-hack-summit)
[![devDependency Status](https://david-dm.org/raduenuca/koding-hack-summit/dev-status.svg)](https://david-dm.org/raduenuca/koding-hack-summit#info=devDependencies)

Repository for the Koding Hack Summit 2016

*Theme: Productivity*

`time-sheets` has the following features:

- Feature 1
- Feature 3
- Feature 4
- Feature 5
- Feature 6
- Feature 7
- Feature 8
- Feature 9
- Feature 10

# How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.

You must have `ts-node` installed as global. If you don't, use:

```bash
npm install -g ts-node
```

In order to start the seed use:


```bash
git clone --depth 1 https://github.com/raduenuca/koding-hack-summit.git
cd koding-hack-summit
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
npm run docs

# dev build
npm run build.dev
# prod build
npm run build.prod
```

_Does not rely on any global dependencies._

# Table of Content

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Running tests](#running-tests)
- [Contributors](#contributors)
- [License](#license)

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Running tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Contributors

[<img alt="raduenuca" src="https://avatars.githubusercontent.com/u/462852?v=3&s=117" width="117">](https://github.com/raduenuca) |
:---: |
[raduenuca](https://github.com/raduenuca) |

# License

MIT