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

        global.App.healthQuizResults.reset();
      });

      describe('when my pain level is high', function(){
        beforeEach(function(){
          global.App.pain = 'high';
        });

       it('should save the current answer', function() {
          thePage.render();
          var model = App.healthQuizResults.where({
            answer: 'go to doctor'
          });
          expect(model.length).toEqual(1);
        });

        it('should advise me to go to the doctor', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('see a doctor.');
        });
      });

      describe('when my pain level is low', function(){
        beforeEach(function(){
          global.App.pain = 'low';
        });

        it('should advise me to monitor my condition', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('monitor your condition.');
        });

        it('should save the current answer', function() {
           thePage.render();
           var model = App.healthQuizResults.where({
             answer: 'monitor condition'
           });
           expect(model.length).toEqual(1);
         });
      });

    });

    describe('when I don\'t have temperature', function(){
      beforeEach(function(){
        global.App.temperature = 'no';
        global.App.healthQuizResults.reset();
      });

      describe('when my pain level is high', function(){
        beforeEach(function(){
          global.App.pain = 'high';
        });

        it('should advise me to monitor my condition', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('monitor your condition.');
        });

        it('should save the current answer', function() {
           thePage.render();
           var model = App.healthQuizResults.where({
             answer: 'monitor condition'
           });
           expect(model.length).toEqual(1);
         });
      });

      describe('when my pain level is low', function(){
        beforeEach(function(){
          global.App.pain = 'low';
        });

        it('should advise me to rest', function(){
          thePage.render();
          var html = thePage.$el.html();
          expect(html).toContainText('rest and recover.');
        });

        it('should save the current answer', function() {
           thePage.render();
           var model = App.healthQuizResults.where({
             answer: 'rest'
           });
           expect(model.length).toEqual(1);
         });
      });

    });

    it('returns the view object', function() {
      expect(thePage.render()).toEqual(thePage);
    });

  });

});
