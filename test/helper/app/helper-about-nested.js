var page = require('webpage').create();
page.open('http://localhost:23456/app/about/nested', function(status) {
  console.log("Status: " + status);
  phantom.exit();
});