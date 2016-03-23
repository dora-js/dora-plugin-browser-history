module.exports = {
  'middleware': function middleware() {
    var middleware = require('connect-history-api-fallback')({

    });

    var noop = function() {};

    return function* (next) {
      middleware(this, null, noop);
      yield next;
    };
  },
};
