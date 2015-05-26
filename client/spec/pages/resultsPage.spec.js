'use strict';

var ResultsPage = require('../../src/js/pages/resultsPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('results', function() {

  var resultsPage;

  beforeEach(function () {
    resultsPage = new ResultsPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      resultsPage.setButtonEvents();
    });

    describe('left', function () {

      xit('should have tests');

    });

    describe('right', function () {

      xit('should have tests');

    });

    describe('top', function () {

      xit('should have tests');

    });

    describe('bottom', function () {

      xit('should have tests');

    });

    describe('face', function () {

      xit('should have tests');

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      resultsPage.render();
      var html = resultsPage.$el.html();
      expect(html).toContainText('results');
    });

    it('returns the view object', function() {
      expect(resultsPage.render()).toEqual(resultsPage);
    });

  });

});
