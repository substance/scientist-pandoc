window.Lens = require("./src/lens");


window.app = new Lens({
  // Endpoint must have CORS enabled, or file is served from the same domain as the app
  "env": "development",
  "library_url": "/config/library.json"
});

$(function() {
  app.start();
});

// var Lens = require("/src/lens.js");

// Create a new Lens app instance
// --------
//
// Injects itself into body

// var app = new Lens();

// $(function() {
//   app.start();
// });