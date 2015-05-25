'use strict';

var DiseasePage = require('../../src/js/pages/diseasePage'),
  Router = require('../../src/js/router.js');

global.router = new Router();

describe('The Diseases Page', function() {

  var diseasePage, router;

  beforeEach(function () {
    router = new Router();
    diseasePage = new DiseasePage();
  });

  describe('diseases data', function () {

    it('should have a diseases collection', function () {
      expect(diseasePage.diseasesCollection).toBeDefined();
    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      diseasePage.render();
      // this test should better target this div <div class="disease">
      expect(diseasePage.el.innerHTML).toContain('Health Facts');
    });

    it('returns the view object', function() {
      expect(diseasePage.render()).toEqual(diseasePage);
    });

  });

  describe('handling button events', function(){

    describe('top button clicking', function(){

      it('should call function goToMenuPage', function(){
        spyOn(diseasePage, 'goToMenuPage');
        diseasePage.setButtonEvents();
        diseasePage.trigger('top');
        expect(diseasePage.goToMenuPage).toHaveBeenCalled();
      });

    });

    describe('right button clicking', function(){

      it('should call function right', function(){
        spyOn(diseasePage, 'right');
        diseasePage.setButtonEvents();
        diseasePage.trigger('right');
        expect(diseasePage.right).toHaveBeenCalled();
      });

    });

    describe('left button clicking', function(){

      it('should call function left', function(){
        spyOn(diseasePage, 'left');
        diseasePage.setButtonEvents();
        diseasePage.trigger('left');
        expect(diseasePage.left).toHaveBeenCalled();
      });

    });

    describe('select button clicking', function(){

      it('should call function select', function(){
        spyOn(diseasePage, 'select');
        diseasePage.setButtonEvents();
        diseasePage.trigger('face');
        expect(diseasePage.select).toHaveBeenCalled();
      });

    });

  });

});
