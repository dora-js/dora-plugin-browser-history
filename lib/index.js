module.exports = {
  'middleware': function() {
    var query = this.query;
    var middleware = require('connect-history-api-fallback')({
      index: query.index || '/index.html',
      rewrites: query.rewrites,
    });

    var noop = function() {};

    return function* (next) {
      middleware(this, null, noop);
      yield next;
    };
  },
};
