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
      spyOn(global.App, 'navigate');
      global.App.temperature = undefined;
    });

    _.each([{ button: 'left', text: 'left / I have temperature', temperatureValue: 'yes'},
    { button: 'right', text: 'right / I don\'t have temperature', temperatureValue: 'no'}],
      function(elem){
        describe(elem.text, function () {

          it('should navigate to the temperature/pain result page' ,function(){
            haveTemperaturePage.trigger(elem.button);
            expect(global.App.navigate).toHaveBeenCalledWith('haveTemperatureResultsPage', true);
          });

          it('should set the correct temperature value', function() {
            haveTemperaturePage.trigger(elem.button);
            expect(global.App.temperature).toEqual(elem.temperatureValue);
          });

        });
    });

    describe('bottom', function () {

      it('should navigate to the rateYourPainPage', function(){
        haveTemperaturePage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('rateYourPainPage', true);
      });

    });

    describe('top', function () {

      it('should navigate to the menuPage', function(){
        haveTemperaturePage.trigger('top');
        expect(global.App.navigate).toHaveBeenCalledWith('menu', true);
      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      haveTemperaturePage.render();
      var html = haveTemperaturePage.$el.html();
      expect(html).toContainText('Do you have a temperature?');
    });

    it('returns the view object', function() {
      expect(haveTemperaturePage.render()).toEqual(haveTemperaturePage);
    });

  });

});
