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
      expect(html).toContainText('Health History');
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

    it('should render all the results in reverse order', function() {
      resultsPage.render();
      var results = resultsPage.$el.find('td.quiz-answer').text();
      expect(results).toEqual('RESULTsadhappy');
    });

  });

});
