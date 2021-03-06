'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {

  var homePage;

  beforeEach(function () {
    homePage = new HomePage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      homePage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the Health Quiz Results page', function () {

        homePage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith('results', true);
      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML for the time', function () {
      homePage.render();

      var time_element = homePage.$el.find(".time").text();
      expect(time_element).toMatch(/\d+:\d+(a|p)[m]/);
    });


    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
