'use strict';

var DiseaseShowPage = require('../../src/js/pages/diseaseShowPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Disease Show Page', function() {

  var diseaseShowPage;

  beforeEach(function () {
    diseaseShowPage = new DiseaseShowPage();
  });

  describe('displaying illnesses', function(){
    it('should display the name of the first illness', function () {
      diseaseShowPage.render();
      // this test should better target this div <div class="disease-info">
      expect(diseaseShowPage.el.innerHTML).toContain('Health Facts');
    });

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

    describe('top button clicking', function(){

      it('should call function goToMenuPage', function(){
        spyOn(diseaseShowPage, 'goToMenuPage');
        diseaseShowPage.setButtonEvents();
        diseaseShowPage.trigger('top');
        expect(diseaseShowPage.goToMenuPage).toHaveBeenCalled();
      });

    });

    describe('bottom button clicking', function(){

      it('should call function back', function(){
        spyOn(diseaseShowPage, 'back');
        diseaseShowPage.setButtonEvents();
        diseaseShowPage.trigger('bottom');
        expect(diseaseShowPage.back).toHaveBeenCalled();
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
