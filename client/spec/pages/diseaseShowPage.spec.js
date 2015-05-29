'use strict';

var DiseaseShowPage = require('../../src/js/pages/diseaseShowPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Disease Show Page', function() {

  var diseaseShowPage;

  beforeEach(function () {
    global.App.router = new Router();
    diseaseShowPage = new DiseaseShowPage();
  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      diseaseShowPage.render();
      // this test should better target this div <div class="disease-info">
      expect(diseaseShowPage.el.innerHTML).toContain('Health Facts');
    });

    it('returns the view object', function() {
      expect(diseaseShowPage.render()).toEqual(diseaseShowPage);
    });

  });

  describe('handling button events', function(){

    describe('bottom button clicking', function(){
      it('should call navigate to the disease page', function(){
        spyOn(global.App.router, 'navigate');
        diseaseShowPage.render();
        diseaseShowPage.setButtonEvents();
        diseaseShowPage.trigger('bottom');
        expect(global.App.router.navigate.calls.argsFor(0)[0]).toContain('diseases');
      });
    });

    describe('top button clicking', function(){

      it('should call function goToMenuPage', function(){
        spyOn(diseaseShowPage, 'goToMenuPage');
        diseaseShowPage.setButtonEvents();
        diseaseShowPage.trigger('top');
        expect(diseaseShowPage.goToMenuPage).toHaveBeenCalled();
      });

    });

    describe('right button clicking', function(){

      it('should call function right', function(){
        spyOn(diseaseShowPage, 'right');
        diseaseShowPage.setButtonEvents();
        diseaseShowPage.trigger('right');
        expect(diseaseShowPage.right).toHaveBeenCalled();
      });

    });

    describe('left button clicking', function(){

      it('should call function left', function(){
        spyOn(diseaseShowPage, 'left');
        diseaseShowPage.setButtonEvents();
        diseaseShowPage.trigger('left');
        expect(diseaseShowPage.left).toHaveBeenCalled();
      });

    });

  });

});
