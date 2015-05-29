'use strict';

var PhyiscalOrEmotionalPage = require('../../src/js/pages/physicalOrEmotionalPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Phyiscal Or Emotional Page', function() {

  var physicalOrEmotionalPage;

  beforeEach(function () {
    physicalOrEmotionalPage = new PhyiscalOrEmotionalPage();
  });

  describe('rendering', function () {

    it('returns the view object', function() {
      expect(physicalOrEmotionalPage.render()).toEqual(physicalOrEmotionalPage);
    });

    it('should produce the correct HTML', function () {
      physicalOrEmotionalPage.render();
      var html = physicalOrEmotionalPage.$el.html();
      expect(html).toContainText('What\'s wrong?');
    });

  });

  describe('button event handlers', function () {

    beforeEach(function () {
      physicalOrEmotionalPage.setButtonEvents();
      spyOn(global.App, 'navigate');
    });

    describe('when right button is clicked', function () {

      it('should navigate to rateYourPainPage', function () {
        physicalOrEmotionalPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('rateYourPainPage');
      });

    });

    describe('when left button is clicked', function () {

      it('should navigate to physicalOrEmotionalResultsPage', function () {
        physicalOrEmotionalPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('physicalOrEmotionalResultsPage');
      });

    });

  });

});
