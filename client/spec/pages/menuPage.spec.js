'use strict';

var MenuPage = require('../../src/js/pages/menuPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Menu Page', function() {

  var menuPage;

  beforeEach(function () {
    menuPage = new MenuPage();
  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      menuPage.render();
      expect(menuPage.el.innerHTML).toContain('<div>Menu View!</div>');
    });

    it('returns the view object', function() {
      expect(menuPage.render()).toEqual(menuPage);
    });

  });

});
