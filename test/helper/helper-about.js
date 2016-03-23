var page = require('webpage').create();
page.open('http://localhost:12345/about', function(status) {
  console.log("Status: " + status);
  phantom.exit();
});