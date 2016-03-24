var page = require('webpage').create();
page.open('http://localhost:23456/app', function(status) {
  console.log("Status: " + status);
  phantom.exit();
});