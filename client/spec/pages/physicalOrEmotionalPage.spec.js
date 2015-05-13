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

});
