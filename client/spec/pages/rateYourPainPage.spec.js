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
      spyOn(global.App, 'navigate');
      global.App.pain = undefined;
    });

    describe('left', function () {

      it('should take you to the temperature check page', function () {
        rateYourPainPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('haveTemperaturePage');
      });

      it('should remember your pain is low', function () {
        rateYourPainPage.trigger('left');
        expect(global.App.pain).toBe('low');
      });

    });

    describe('right', function () {

      it('should take you to the temperature check page', function () {
        rateYourPainPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('haveTemperaturePage');
      });

      it('should remember your pain is high', function () {
        rateYourPainPage.trigger('right');
        expect(global.App.pain).toBe('high');
      });

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
      expect(html).toContainText('Rate your pain:');
    });

    it('returns the view object', function() {
      expect(rateYourPainPage.render()).toEqual(rateYourPainPage);
    });

  });

});
