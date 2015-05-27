'use strict';

var PhysicalOrEmotionalResultsPage = require('../../src/js/pages/physicalOrEmotionalResultsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('physicalOrEmotionalResultsPage', function() {

  var physicalOrEmotionalResultsPage;

  beforeEach(function () {
    physicalOrEmotionalResultsPage = new PhysicalOrEmotionalResultsPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      physicalOrEmotionalResultsPage.setButtonEvents();
      spyOn(global.App, 'navigate');
    });

    describe('left', function () {

      xit('should have tests');

    });

    describe('right', function () {

      xit('should have tests');

    });

    describe('top', function () {

      it('should navigate to menuPage', function () {
        physicalOrEmotionalResultsPage.trigger('top');
        expect(global.App.navigate).toHaveBeenCalledWith('menuPage');
      });

    });

    // describe('when right button is clicked', function () {

    //   it('should call tiredOption function', function () {
    //     spyOn(physicalOrEmotionalPage, 'tiredOption');
    //     physicalOrEmotionalPage.setButtonEvents();
    //     physicalOrEmotionalPage.trigger('right');

    //     expect(physicalOrEmotionalPage.tiredOption).toHaveBeenCalled();
    //   });

    // });

    describe('bottom', function () {

      // xit('should have tests');
      it('should navigate to previous Page', function () {
        physicalOrEmotionalResultsPage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('physicalOrEmotionalPage');
      });

    });

    describe('face', function () {

      xit('should have tests');

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      physicalOrEmotionalResultsPage.render();
      var html = physicalOrEmotionalResultsPage.$el.html();
      expect(html).toContainText('physicalOrEmotionalResultsPage');
    });

    it('returns the view object', function() {
      expect(physicalOrEmotionalResultsPage.render()).toEqual(physicalOrEmotionalResultsPage);
    });

  });

});
