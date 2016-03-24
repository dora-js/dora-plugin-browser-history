var dora = require('dora');
var expect = require('expect.js');
var join = require('path').join;
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path;

describe('dora-plugin-browser-history', function(){

  const oldCwd = process.cwd();
  const cwd = join(__dirname, './fixtures');

  describe('index with no query', function() {

    var helperIndexJs = join(__dirname, './helper/helper-index.js');
    var helperAboutJs = join(__dirname, './helper/helper-about.js');
    var helperAboutNestedJs = join(__dirname, './helper/helper-about-nested.js');

    before(function(done) {
      process.chdir(cwd);
      dora({
        port: 12345,
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

    it('GET index.html', function(done) {
      childProcess.execFile(binPath, [helperIndexJs], function(err, stdout, stderr) {
        expect(stdout.indexOf('success')).to.be.above(-1);
        done()
      });
    });

    it('GET /about 200', function(done) {
      childProcess.execFile(binPath, [helperAboutJs], function(err, stdout, stderr) {
        expect(stdout.indexOf('success')).to.be.above(-1);
        done()
      });
    });

    it('GET /about/nested 200', function(done) {
      childProcess.execFile(binPath, [helperAboutNestedJs], function(err, stdout, stderr) {
        expect(stdout.indexOf('success')).to.be.above(-1);
        done()
      });
    });
  });

  describe('index with query', function() {

    var helperAppIndexJs = join(__dirname, './helper/app/helper-index.js');
    var helperAppAboutJs = join(__dirname, './helper/app/helper-about.js');
    var helperAppAboutNestedJs = join(__dirname, './helper/app/helper-about-nested.js');

    before(function(done) {
      process.chdir(cwd);
      dora({
        port: 23456,
        plugins: [
          '../../lib/index?index=/app'
        ],
        cwd: cwd
      });
      setTimeout(done, 1000);
    });

    after(function() {
      process.chdir(oldCwd);
    });

    it('GET /app/index.html', function(done) {
      childProcess.execFile(binPath, [helperAppIndexJs], function(err, stdout, stderr) {
        expect(stdout.indexOf('success')).to.be.above(-1);
        done()
      });
    });

    it('GET /app/about 200', function(done) {
      childProcess.execFile(binPath, [helperAppAboutJs], function(err, stdout, stderr) {
        expect(stdout.indexOf('success')).to.be.above(-1);
        done()
      });
    });

    it('GET /app/about/nested 200', function(done) {
      childProcess.execFile(binPath, [helperAppAboutNestedJs], function(err, stdout, stderr) {
        expect(stdout.indexOf('success')).to.be.above(-1);
        done()
      });
    });
  });

});