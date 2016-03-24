module.exports = {
  'middleware': function() {
    var indexFile = this.query.index;
    var middleware = require('connect-history-api-fallback')({
      index: indexFile || '/index.html' || '/index.htm'
    });

    var noop = function() {};

    return function* (next) {
      middleware(this, null, noop);
      yield next;
    };
  },
};
