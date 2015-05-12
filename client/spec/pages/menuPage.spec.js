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
      expect(menuPage.el.innerHTML).toContain('<div class="top-tri">Feature 1</div>');
    });

    it('returns the view object', function() {
      expect(menuPage.render()).toEqual(menuPage);
    });

  });

  describe('handling button events', function(){

    describe('top button clicking', function(){

      it('should call function goToFeature1', function(){
        spyOn(menuPage, 'goToFeature1');
        menuPage.setButtonEvents();
        menuPage.trigger('top');
        expect(menuPage.goToFeature1).toHaveBeenCalled();
      });

    });

    describe('right button clicking', function(){

      it('should call function goToFeature2', function(){
        spyOn(menuPage, 'goToFeature2');
        menuPage.setButtonEvents();
        menuPage.trigger('right');
        expect(menuPage.goToFeature2).toHaveBeenCalled();
      });

    });

    describe('bottom button clicking', function(){

      it('should call function goToFeature3', function(){
        spyOn(menuPage, 'goToFeature3');
        menuPage.setButtonEvents();
        menuPage.trigger('bottom');
        expect(menuPage.goToFeature3).toHaveBeenCalled();
      });

    });

    describe('left button clicking', function(){

      it('should call function goToFeature4', function(){
        spyOn(menuPage, 'goToFeature4');
        menuPage.setButtonEvents();
        menuPage.trigger('left');
        expect(menuPage.goToFeature4).toHaveBeenCalled();
      });

    });

  });

});
