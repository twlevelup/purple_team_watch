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

  });

  describe('button event handlers', function () {

    describe('when right button is clicked', function () {

      it('should call tiredOption function', function () {
        spyOn(physicalOrEmotionalPage, 'tiredOption');
        physicalOrEmotionalPage.setButtonEvents();
        physicalOrEmotionalPage.trigger('right');

        expect(physicalOrEmotionalPage.tiredOption).toHaveBeenCalled();
      });

    });

    describe('when left button is clicked', function () {

      it('should call sadOption function ', function () {
        spyOn(physicalOrEmotionalPage,'sadOption');
        physicalOrEmotionalPage.setButtonEvents();
        physicalOrEmotionalPage.trigger('left');

        expect(physicalOrEmotionalPage.sadOption).toHaveBeenCalled();
      });

    });

  });

});
