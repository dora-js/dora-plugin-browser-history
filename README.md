# dora-plugin-browser-history

dora plugin for [react-router](https://github.com/reactjs/react-router) browser history([#browserhistory](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#browserhistory))

[![NPM version](https://img.shields.io/npm/v/dora-plugin-browser-history.svg?style=flat)](https://npmjs.org/package/dora-plugin-browser-history)
[![Build Status](https://img.shields.io/travis/dora-js/dora-plugin-browser-history.svg?style=flat)](https://travis-ci.org/dora-js/dora-plugin-browser-history)
[![Coverage Status](https://img.shields.io/coveralls/dora-js/dora-plugin-browser-history.svg?style=flat)](https://coveralls.io/r/dora-js/dora-plugin-browser-history)


## Feature

- support react-router `browserHistory`

## Install

```bash
$ npm install dora-plugin-browser-history --save-dev
```

## Usage

```javascript
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home';
import Setting from './Setting';
import Download from './Download';

ReactDom.render((
  <Router history={browserHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="setting" component={Setting}/>
      <Route path="download" component={Download} />
    </Route>
  </Router>
), document.getElementById('react-content'));
``` 

```bash
$ dora --plugins browser-history
```

## Query

Path of the index file

```bash
$ dora --plugins browser-history?index=/example/entry.html
```
