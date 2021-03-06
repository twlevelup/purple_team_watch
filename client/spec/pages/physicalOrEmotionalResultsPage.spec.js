'use strict';

var PhysicalOrEmotionalResultsPage = require('../../src/js/pages/physicalOrEmotionalResultsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('physicalOrEmotionalResultsPage', function() {

  var physicalOrEmotionalResultsPage;

  beforeEach(function () {
    App.healthQuizResults.reset();
    physicalOrEmotionalResultsPage = new PhysicalOrEmotionalResultsPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      physicalOrEmotionalResultsPage.setButtonEvents();
      spyOn(global.App, 'navigate');
    });

    describe('left', function () {

      it('should navigate to menuPage', function () {
        physicalOrEmotionalResultsPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('menu');
      });

    });

    describe('right', function () {

      it('should navigate to menuPage', function () {
        physicalOrEmotionalResultsPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('menu');
      });
    });

    describe('top', function () {

      it('should navigate to menuPage', function () {
        physicalOrEmotionalResultsPage.trigger('top');
        expect(global.App.navigate).toHaveBeenCalledWith('menu');
      });

    });

    describe('bottom', function () {

      it('should navigate to previous Page', function () {
        physicalOrEmotionalResultsPage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('physicalOrEmotionalPage');
      });

    });

    describe('face', function () {

      it('should navigate to menuPage', function () {
        physicalOrEmotionalResultsPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('menu');
      });

    });

  });

  describe('rendering', function () {

   it('should save the current answer', function() {
      physicalOrEmotionalResultsPage.render();
      var model = App.healthQuizResults.where({
        answer: 'chill out'
      });
      expect(model.length).toEqual(1);
    });

    it('should produce the correct HTML', function () {
      physicalOrEmotionalResultsPage.render();
      var html = physicalOrEmotionalResultsPage.$el.html();
      expect(html).toContainText('take a break');
    });

    it('returns the view object', function() {
      expect(physicalOrEmotionalResultsPage.render()).toEqual(physicalOrEmotionalResultsPage);
    });

  });

});
