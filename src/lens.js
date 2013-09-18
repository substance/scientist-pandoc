"use strict";

var _ = require("underscore");
var Application = require("substance-application");
var LensController = require("./lens_controller");
var Keyboard = require("substance-commander").Keyboard;
var util = require("substance-util");
var html = util.html;

// var DEFAULT_CONFIG = require("../config/config.json");
var DEFAULT_CONFIG = {
  "env": "development",
  "library_url": "config/library.json"
};

var ROUTES = [
  {
    "route": ":collection/:document/:context/:node/:resource/:fullscreen",
    "name": "document-resource",
    "command": "openReader"
  },
  {
    "route": ":collection/:document/:context/:node/:resource",
    "name": "document-resource",
    "command": "openReader"
  },
  {
    "route": ":collection/:document/:context/:node/:resource",
    "name": "document-resource",
    "command": "openReader"
  },
  {
    "route": ":collection/:document/:context/:node",
    "name": "document-node", 
    "command": "openReader"
  },
  {
    "route": ":collection/:document/:context",
    "name": "document-context",
    "command": "openReader"
  },
  {
    "route": ":collection/:document", 
    "name": "document",
    "command": "openReader"
  },
  {
    "route": ":collection",
    "name": "library",
    "command": "openLibrary"
  },
  {
    "route": "",
    "name": "library",
    "command": "openLibrary"
  },
  {
    "route": "tests",
    "name": "tests",
    "command": "openTestCenter"
  },
  {
    "route": "tests/:suite",
    "name": "tests",
    "command": "openTestCenter"
  }
];

// The Lens Application
// ========
//

var Lens = function(config) {
  config = config || DEFAULT_CONFIG;
  config.routes = ROUTES; // require("../config/routes.json");
  Application.call(this, config);

  this.controller = new LensController(config);
};

Lens.Article = require("lens-article");
Lens.Reader = require("lens-reader");
Lens.Outline = require("lens-outline");

Lens.Prototype = function() {

  // Start listening to routes
  // --------

  this.render = function() {
    this.view = this.controller.createView();
    this.$el.html(this.view.render().el);
  }
};


Lens.Prototype.prototype = Application.prototype;
Lens.prototype = new Lens.Prototype();
Lens.prototype.constructor = Lens;

var Substance = {
  util: require("substance-util"),
  Test: require("substance-test"),
  Application: require("substance-application"),
  Commander: require("substance-commander"),
  Document: require("substance-document"),
  Operator: require("substance-operator"),
  Chronicle: require("substance-chronicle"),
  Data: require("substance-data"),
  RegExp: require("substance-regexp"),
  Surface: require("substance-surface")
};


// Register tests
// --------
// 

// require("lens-converter/tests");
// require("substance-application/tests");
// require("substance-converter/tests");
// require("substance-operator/tests");
// require("substance-chronicle/tests");
// require("substance-data/tests");
// require("substance-document/tests");
// require("substance-article/tests");
// require("substance-store/tests");
// require("substance-surface/tests");

Lens.Substance = Substance;

module.exports = Lens;