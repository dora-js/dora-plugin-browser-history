var dora = require('dora');
var expect = require('expect.js');
var join = require('path').join;
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path;

describe('index', function() {

  const port = 12345;
  const oldCwd = process.cwd();
  const cwd = join(__dirname, './fixtures');

  var helperIndexJs = join(__dirname, './helper/helper-index.js');
  var helperAboutJs = join(__dirname, './helper/helper-about.js');
  var helperAboutNestedJs = join(__dirname, './helper/helper-about-nested.js');

  before(function(done) {
    process.chdir(cwd);
    dora({
      port: port,
      plugins: [
        '../../lib/index'
      ],
      cwd: cwd
    });
    setTimeout(done, 1000);
  });

  after(function() {
    process.chdir(oldCwd);
  });

  var child;

  afterEach(function(){
    if(child) {
      //child.exit(0);
    }
  });

  it('GET index.html', function(done) {
    child = childProcess.execFile(binPath, [helperIndexJs], function(err, stdout, stderr) {
      expect(stdout.indexOf('success')).to.be.above(-1);
      done()
    });
  });

  it('GET /about 200', function(done) {
    child = childProcess.execFile(binPath, [helperAboutJs], function(err, stdout, stderr) {
      expect(stdout.indexOf('success')).to.be.above(-1);
      done()
    });
  });

  it('GET /about/nested 200', function(done) {
    child = childProcess.execFile(binPath, [helperAboutJs], function(err, stdout, stderr) {
      expect(stdout.indexOf('success')).to.be.above(-1);
      done()
    });
  });

});