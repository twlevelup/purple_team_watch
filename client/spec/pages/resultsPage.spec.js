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

    beforeEach(function () {
      App.healthQuizResults.reset([
        {
          answer: 'happy'
        }, {
          answer: 'sad'
        }
      ]);
    });

    it('should produce the correct HTML', function () {
      resultsPage.render();
      var html = resultsPage.$el.html();
      expect(html).toContainText('Health Quiz Results');
    });

    it('returns the view object', function() {
      expect(resultsPage.render()).toEqual(resultsPage);
    });

    it('should render all of the health quiz results', function () {
      resultsPage.render();
      var html = resultsPage.$el.html();
      expect(html).toContainText('happy');
      expect(html).toContainText('sad');
    });

  });

});
