var page = require('webpage').create();
page.open('http://localhost:12345/about/nested', function(status) {
  console.log("Status: " + status);
  phantom.exit();
});