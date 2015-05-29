'use strict';

var HaveTemperatureResultsPage = require('../../src/js/pages/haveTemperatureResultsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('haveTemperatureResultsPage', function() {

  var thePage;

  beforeEach(function () {
    thePage = new HaveTemperatureResultsPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      thePage.setButtonEvents();
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
      thePage.render();
      var html = thePage.$el.html();
      expect(html).toContainText('haveTemperatureResultsPage');
    });

    it('returns the view object', function() {
      expect(thePage.render()).toEqual(thePage);
    });

  });

});
