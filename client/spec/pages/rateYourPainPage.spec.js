'use strict';

var RateYourPainPage = require('../../src/js/pages/rateYourPainPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('rate your pain', function() {

  var rateYourPainPage;

  beforeEach(function () {
    rateYourPainPage = new RateYourPainPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      rateYourPainPage.setButtonEvents();
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
      rateYourPainPage.render();
      var html = rateYourPainPage.$el.html();
      expect(html).toContainText('rate your pain');
    });

    it('returns the view object', function() {
      expect(rateYourPainPage.render()).toEqual(rateYourPainPage);
    });

  });

});
