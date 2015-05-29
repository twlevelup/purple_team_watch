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
      spyOn(global.App, 'navigate');
    });

    _.each(['left', 'right', 'top', 'face'], function(elem) {

      describe('clicking '+elem, function() {

        it('should navigate to the menuPage', function() {
          thePage.trigger(elem);
          expect(global.App.navigate).toHaveBeenCalledWith('menu', true);
        });

      });
    });

    describe('bottom', function () {

      it('should navigate to the temperature page', function() {
        thePage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('haveTemperaturePage', true);
      });

    });

  });

  describe('rendering', function () {

    describe('when I have temperature', function(){
      beforeEach(function(){
        global.App.temperature = 'yes';
      });

      describe('when my pain level is high', function(){
        beforeEach(function(){
          global.App.pain = 'high';
        });

        it('should advise me to go to the doctor', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('You should see a doctor.');
        });
      });

      describe('when my pain level is low', function(){
        beforeEach(function(){
          global.App.pain = 'low';
        });

        it('should advise me to monitor my condition', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('You should monitor your condition.');
        });
      });

    });

    describe('when I don\'t have temperature', function(){
      beforeEach(function(){
        global.App.temperature = 'no';
      });

      describe('when my pain level is high', function(){
        beforeEach(function(){
          global.App.pain = 'high';
        });

        it('should advise me to monitor my condition', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('You should monitor your condition.');
        });
      });

      describe('when my pain level is low', function(){
        beforeEach(function(){
          global.App.pain = 'low';
        });

        it('should advise me to rest', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('You should rest and recover.');
        });
      });

    });

    it('returns the view object', function() {
      expect(thePage.render()).toEqual(thePage);
    });

  });

});
