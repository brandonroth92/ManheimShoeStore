var gulp = require('gulp');

// modules
var selenium = require('selenium-standalone');
var webdriver = require('gulp-webdriver');
var eslint = require('gulp-eslint');

// run ESLint on all JavaScript files
gulp.task('lint', function () {
  return gulp.src('**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});  

// update and start selenium using selenium-standalone
gulp.task('selenium', function (done) {
  selenium.install({
    version: '3.3.0',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    logger(message) {}
  }, function (err) {
    if (err) return done(err);
    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

// use simple "gulp runTest" command to automate install/start of selenium and webdriverio test runner
// pipe config file to webdriver() and then kill selenium server when finished
gulp.task('runTest', ['selenium'], function () {
  return gulp.src('wdio.conf.js')
    .pipe(webdriver()).once('end', function () {
      selenium.child.kill();
    });
});