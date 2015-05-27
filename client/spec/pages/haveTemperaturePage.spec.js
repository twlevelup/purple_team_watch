'use strict';

var HaveTemperaturePage = require('../../src/js/pages/haveTemperaturePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('haveTemperaturePage', function() {

  var haveTemperaturePage;

  beforeEach(function () {
    haveTemperaturePage = new HaveTemperaturePage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      haveTemperaturePage.setButtonEvents();
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
      haveTemperaturePage.render();
      var html = haveTemperaturePage.$el.html();
      expect(html).toContainText('haveTemperaturePage');
    });

    it('returns the view object', function() {
      expect(haveTemperaturePage.render()).toEqual(haveTemperaturePage);
    });

  });

});
