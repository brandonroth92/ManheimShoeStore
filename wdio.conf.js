exports.config = {
    
  specs: [
      './test/specs/*.js'
  ],
  exclude: [
  ],
  maxInstances: 10,
  
  // substitue 'firefox' or 'internet explorer' for 'chrome' to run tests on each browser
  // alternately, add additional objects to capabilities array with { browserName: 'browser' } to run tests concurrently
  capabilities: [{
      browserName: 'chrome'
  }],

  sync: true,

  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'verbose',

  // Enables colors for log output.
  coloredLogs: true,

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './errorShots/',

  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: 'http://localhost',

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Framework you want to run your specs with.
  framework: 'mocha',

  // Test reporter for stdout.
  reporters: ['dot'],
  reporterOptions: {
      outputDir: './'
  },

  services: ['selenium-standalone', 'phantomjs'],

  // Options to be passed to Mocha.
  mochaOpts: {
      ui: 'bdd',
      timeout: 20000
  },

  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
    var chai = require('chai');
    global.expect = chai.expect;
  },

  // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  afterTest: function (test) {
    browser.reload();
  }
};
